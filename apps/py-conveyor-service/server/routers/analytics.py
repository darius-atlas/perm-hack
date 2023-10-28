from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from api.request.analytics import AnalyticsFilters
from managers.analytics import AnalyticsManager
from server.depends import get_session, PagesPaginationParams

router = APIRouter(prefix="/api/analytics", tags=['Ride'])


@router.post('/all')
async def get_all_analytics(
    filters: AnalyticsFilters,
    session: AsyncSession = Depends(get_session),
):
    data = await AnalyticsManager.get_by_filters(
        session=session,
        start_date=filters.start_time,
        end_date=filters.end_time
    )

    return data
