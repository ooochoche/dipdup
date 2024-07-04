# generated by DipDup 8.0.0b3

from __future__ import annotations

from pydantic import BaseModel
from pydantic import ConfigDict


class BurnPayload(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    owner: str
    tickLower: int
    tickUpper: int
    amount: int
    amount0: int
    amount1: int
