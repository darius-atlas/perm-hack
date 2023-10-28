from datetime import datetime

from api.response.base import ResponseBase
from db.models.conveer import DBConveer
from pydantic import Field


class AreaCharts(ResponseBase):
    name: str = Field(...)
    value: int = Field(...)


class TimelineCharts(AreaCharts):
    time: datetime = Field(...)


class ResponseAnalytics(ResponseBase):
    timeline_charts: list[TimelineCharts] = Field(...)
    area_charts: list[AreaCharts] = Field(...)
    total_numb: int = Field(...)
    metal_numb: int = Field(...)
    wood_numb: int = Field(...)
    plastic_numb: int = Field(...)
    glass_numb: int = Field(...)


class ResponseAnalyticsFactory:

    @staticmethod
    def get_from_model_area_charts(value, name) -> AreaCharts:
        return AreaCharts(
            name=name,
            value=value
        )

    @staticmethod
    def count_categories(models: list[DBConveer]) -> list[int]:
        wood = 0
        glass = 0
        metal = 0
        plastic = 0
        for i in models:
            wood += i.wood
            glass += i.glass
            metal += i.metal
            plastic += i.plastic
        return [wood, glass, metal, plastic]

    @classmethod
    def get_from_models_area_charts(cls, models: list[DBConveer]) -> list[AreaCharts]:
        wood, glass, metal, plastic = cls.count_categories(models)
        return [cls.get_from_model_area_charts(name='wood', value=wood),
                cls.get_from_model_area_charts(name='glass', value=glass),
                cls.get_from_model_area_charts(name='metal', value=metal),
                cls.get_from_model_area_charts(name='plastic', value=plastic)]

    @classmethod
    def get_from_model_timeline_charts(cls, name, value, time):
        return TimelineCharts(
            **cls.get_from_model_area_charts(name=name, value=value).__dict__,
            time=time)

    @classmethod
    def get_from_model_timeline_chart(cls, models: list[DBConveer]) -> list[TimelineCharts]:
        response = []
        print(len(models))
        for i in models:
            response.append(cls.get_from_model_timeline_charts(name='wood', value=i.wood, time=i.created_at))
            response.append(cls.get_from_model_timeline_charts(name='glass', value=i.glass, time=i.created_at))
            response.append(cls.get_from_model_timeline_charts(name='plastic', value=i.plastic, time=i.created_at))
            response.append(cls.get_from_model_timeline_charts(name='metal', value=i.metal, time=i.created_at))
        return response

    @classmethod
    def get_from_models(cls, models: list[DBConveer]) -> ResponseAnalytics:
        return ResponseAnalytics(
            area_charts=cls.get_from_models_area_charts(models),
            timeline_charts=cls.get_from_model_timeline_chart(models),
            total_numb=sum(cls.count_categories(models)),
            metal_numb=cls.count_categories(models)[2],
            wood_numb=cls.count_categories(models)[0],
            plastic_numb=cls.count_categories(models)[3],
            glass_numb=cls.count_categories(models)[1]
        )
