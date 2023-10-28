from datetime import datetime
from typing import Optional

from db.repository.base import BaseRepository

from db.models.conveer import DBConveer

from sqlalchemy import (
    select,
    func
)


class AnalyticsRepository(BaseRepository):

    async def get_analytic(self,
                           start_date: Optional[datetime],
                           end_date: Optional[datetime]) -> list[DBConveer]:
        query = (
            select(DBConveer)
            .select_from(DBConveer)
        )

        if start_date is not None:
            query = query.filter(DBConveer.created_at >= func.timezone('UTC', start_date))

        if end_date is not None:
            query = query.filter(DBConveer.created_at <= func.timezone('UTC', end_date))


        return await self.all_ones(query)
