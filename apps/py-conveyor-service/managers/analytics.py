from datetime import datetime
from typing import Optional

from sqlalchemy.ext.asyncio import AsyncSession

from db.models.conveer import DBConveer
from db.repository.analytics import AnalyticsRepository


class AnalyticsManager:

    @classmethod
    async def get_by_filters(cls,
                             session: AsyncSession,
                             start_date: Optional[datetime],
                             end_date: Optional[datetime]) -> list[DBConveer]:
        datas: list[DBConveer] = await AnalyticsRepository(session).get_analytic(start_date=start_date,
                                                                                 end_date=end_date)
        return datas
