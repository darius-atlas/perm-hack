from typing import Optional

from api.request.base import RequestBase
from datetime import datetime

from pydantic import Field


class AnalyticsFilters(RequestBase):
    start_time: Optional[datetime] = Field(None)
    end_time: Optional[datetime] = Field(None)
