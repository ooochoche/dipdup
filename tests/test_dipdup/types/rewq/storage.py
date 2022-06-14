# generated by datamodel-codegen:
#   filename:  storage.json

from __future__ import annotations

from typing import Any
from typing import Dict
from typing import Union

from pydantic import BaseModel
from pydantic import Extra
from pydantic import Field


class MapItem(BaseModel):
    class Config:
        extra = Extra.forbid

    L: Dict[str, str]


class MapItem1(BaseModel):
    class Config:
        extra = Extra.forbid

    R: Dict[str, Any]


class OrItem(BaseModel):
    class Config:
        extra = Extra.forbid

    L: Dict[str, str]


class OrItem1(BaseModel):
    class Config:
        extra = Extra.forbid

    R: Dict[str, Any]


class RewqStorage(BaseModel):
    class Config:
        extra = Extra.forbid

    map: Dict[str, Union[MapItem, MapItem1]]
    or_: Union[OrItem, OrItem1] = Field(..., alias='or')