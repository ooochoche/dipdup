# generated by DipDup 8.0.0b3

from __future__ import annotations

from pydantic import BaseModel
from pydantic import ConfigDict


class TezToTokenPaymentParameter(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    min_out: str
    receiver: str