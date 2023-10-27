from datetime import datetime

from api.response.base import ResponseBase


class AreaCharts:
    name: str
    value: int


class TimelineCharts(AreaCharts):
    time: datetime


class RequestAnalytics(ResponseBase):
    timeline_charts: list[TimelineCharts]
    area_charts: list[AreaCharts]
    bar_chars: list[AreaCharts]
