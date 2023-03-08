# generated by datamodel-codegen:
#   filename:  divestLiquidity.json

from __future__ import annotations

from pydantic import BaseModel
from pydantic import Extra


class DivestLiquidityParameter(BaseModel):
    class Config:
        extra = Extra.forbid

    min_tez: str
    min_tokens: str
    shares: str