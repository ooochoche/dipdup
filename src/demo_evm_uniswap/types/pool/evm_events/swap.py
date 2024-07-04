# generated by DipDup 8.0.0b3

from __future__ import annotations

from pydantic import BaseModel
from pydantic import ConfigDict


class SwapPayload(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    sender: str
    recipient: str
    amount0: int
    amount1: int
    sqrtPriceX96: int
    liquidity: int
    tick: int
