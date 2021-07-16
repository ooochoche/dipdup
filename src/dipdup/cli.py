import asyncio
import fileinput
import logging
import os
from dataclasses import dataclass
from functools import wraps
from os.path import dirname, join
from typing import List, cast

import click
import sentry_sdk
from fcache.cache import FileCache  # type: ignore
from sentry_sdk.integrations.aiohttp import AioHttpIntegration

from dipdup import __spec_version__, __version__, spec_version_mapping
from dipdup.config import DipDupConfig, LoggingConfig, PostgresDatabaseConfig
from dipdup.dipdup import DipDup
from dipdup.exceptions import ConfigurationError, DipDupError, MigrationRequiredError
from dipdup.hasura import HasuraGateway
from dipdup.utils import set_decimal_context, tortoise_wrapper

_logger = logging.getLogger('dipdup.cli')


def click_command_wrapper(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        try:
            return asyncio.run(fn(*args, **kwargs))
        except DipDupError as e:
            _logger.critical(e.__repr__())
            _logger.info(e.format())
            quit(e.exit_code)

    return wrapper


@dataclass
class CLIContext:
    config_paths: List[str]
    config: DipDupConfig
    logging_config: LoggingConfig


@click.group()
@click.version_option(__version__)
@click.option('--config', '-c', type=str, multiple=True, help='Path to dipdup YAML config', default=['dipdup.yml'])
@click.option('--logging-config', '-l', type=str, help='Path to logging YAML config', default='logging.yml')
@click.pass_context
@click_command_wrapper
async def cli(ctx, config: List[str], logging_config: str):
    try:
        path = join(os.getcwd(), logging_config)
        _logging_config = LoggingConfig.load(path)
    except FileNotFoundError:
        path = join(dirname(__file__), 'configs', logging_config)
        _logging_config = LoggingConfig.load(path)
    _logging_config.apply()

    _config = DipDupConfig.load(config)
    if _config.spec_version not in spec_version_mapping:
        raise ConfigurationError('Unknown `spec_version`, correct ones: {}')
    if _config.spec_version != __spec_version__ and ctx.invoked_subcommand != 'migrate':
        raise MigrationRequiredError(None, _config.spec_version, __spec_version__)

    if _config.sentry:
        sentry_sdk.init(
            dsn=_config.sentry.dsn,
            environment=_config.sentry.environment,
            integrations=[AioHttpIntegration()],
        )

    set_decimal_context(_config.package)

    ctx.obj = CLIContext(
        config_paths=config,
        config=_config,
        logging_config=_logging_config,
    )


@cli.command(help='Run existing dipdup project')
@click.option('--reindex', is_flag=True, help='Drop database and start indexing from scratch')
@click.option('--oneshot', is_flag=True, help='Synchronize indexes wia REST and exit without starting WS connection')
@click.pass_context
@click_command_wrapper
async def run(ctx, reindex: bool, oneshot: bool) -> None:
    config: DipDupConfig = ctx.obj.config
    config.initialize()
    dipdup = DipDup(config)
    await dipdup.run(reindex, oneshot)


@cli.command(help='Initialize new dipdup project')
@click.pass_context
@click_command_wrapper
async def init(ctx):
    config: DipDupConfig = ctx.obj.config
    config.pre_initialize()
    dipdup = DipDup(config)
    await dipdup.init()


@cli.command(help='Migrate project to the new spec version')
@click.pass_context
@click_command_wrapper
async def migrate(ctx):
    def _bump_spec_version(spec_version: str):
        for config_path in ctx.obj.config_paths:
            for line in fileinput.input(config_path, inplace=True):
                if 'spec_version' in line:
                    print(f'spec_version: {spec_version}')
                else:
                    print(line.rstrip())

    config: DipDupConfig = ctx.obj.config
    config.pre_initialize()

    if config.spec_version == __spec_version__:
        _logger.error('Project is already at latest version')
    elif config.spec_version == '0.1':
        await DipDup(config).migrate_to_v10()
        _bump_spec_version('1.0')
    elif config.spec_version == '1.0':
        await DipDup(config).migrate_to_v11()
        _bump_spec_version('1.1')
    else:
        raise ConfigurationError('Unknown `spec_version`')


@cli.command(help='Clear development request cache')
@click.pass_context
@click_command_wrapper
async def clear_cache(ctx):
    FileCache('dipdup', flag='cs').clear()


@cli.command(help='Configure Hasura GraphQL Engine')
@click.option('--reset', is_flag=True, help='Reset metadata before configuring')
@click.pass_context
@click_command_wrapper
async def configure_hasura(ctx, reset: bool):
    config: DipDupConfig = ctx.obj.config
    url = config.database.connection_string
    models = f'{config.package}.models'
    if not config.hasura:
        _logger.error('`hasura` config section is empty')
        return
    hasura_gateway = HasuraGateway(config.package, config.hasura, cast(PostgresDatabaseConfig, config.database))

    async with tortoise_wrapper(url, models):
        async with hasura_gateway:
            await hasura_gateway.configure(reset)
