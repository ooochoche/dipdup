# generated by DipDup 8.0.0b3

from __future__ import annotations

from pydantic import BaseModel
from pydantic import ConfigDict
from pydantic import Field


class ProposeParameter(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
    )
    from_: str = Field(..., alias='from')
    frozen_token: str
    proposal_metadata: str
