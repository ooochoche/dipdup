# Logging

Currently, you have two options to configure logging:

1. Manually in `on_restart` hook

```python
import logging

async def on_restart(
    ctx: HookContext,
) -> None:
    logging.getLogger('dipdup').setLevel('DEBUG')
```

2. With Python logging config

> ⚠ **WARNING**
>
> This feature will be deprecated soon. Consider configuring logging inside of `on_restart` hook.

```shell
dipdup -l logging.yml run
```

Example config:

```yaml
version: 1
disable_existing_loggers: false
formatters:
  brief:
    format: "%(levelname)-8s %(name)-20s %(message)s"
handlers:
  console:
    level: INFO
    formatter: brief
    class: logging.StreamHandler
    stream: ext://sys.stdout
loggers:
  dipdup:
    level: INFO

  aiosqlite:
    level: INFO
  db_client:
    level: INFO
root:
  level: INFO
  handlers:
    - console
```