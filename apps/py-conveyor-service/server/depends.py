from datetime import datetime, timedelta
from typing import Optional

from sqlalchemy.ext.asyncio import AsyncSession

from fastapi import Depends, Query

from configs.config import secret, encrypt_algorithm

from vendors.db import async_session

from fastapi.exceptions import HTTPException


async def get_session() -> AsyncSession:
    async with async_session() as session:
        yield session

class PagesPaginationParams:
    def __init__(
            self,
            limit: int = Query(50, ge=0, le=1_000),
            offset: int = Query(0, ge=0, alias='skip'),
    ) -> None:
        self.limit = limit
        self.offset = offset
