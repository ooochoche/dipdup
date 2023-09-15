from demo_domains.handlers.on_storage_diff import on_storage_diff
from demo_domains.types.name_registry.tezos_parameters.execute import ExecuteParameter
from demo_domains.types.name_registry.tezos_storage import NameRegistryStorage
from dipdup.context import HandlerContext
from dipdup.models.tezos_tzkt import TzktTransaction


async def on_execute(
    ctx: HandlerContext,
    execute: TzktTransaction[ExecuteParameter, NameRegistryStorage],
) -> None:
    storage = execute.storage
    await on_storage_diff(ctx, storage)