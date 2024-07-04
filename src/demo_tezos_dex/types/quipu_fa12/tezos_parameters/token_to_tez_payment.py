# generated by DipDup 8.0.0b3

from __future__ import annotations

from pydantic import BaseModel
from pydantic import ConfigDict


class TokenToTezPaymentParameter(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    amount: str
    min_out: str
    receiver: str
