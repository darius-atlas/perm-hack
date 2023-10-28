import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import SwitchSelector from "react-switch-selector";
import {ConfigProvider, DatePicker} from "antd";
import cls from "./filters.module.scss";
import {useGetDateMutation} from "../../../../apps/crud/src/store/services/statisticsFilterApi";
import {useAppDispatch} from "../../../../apps/crud/src/store";
import {setData, setType} from "../../../../apps/crud/src/store/features/statisticsFilterSlice";

export enum timeFormatEnum {
    DATE = "date",
    PERIOD = "period",
}

export function Filters() {
    const [timeFormat, setTimeFormat] = useState<timeFormatEnum>(timeFormatEnum.DATE);
    const [timeData, setTimeData] = useState<string>();
    const [mutation, {data}] = useGetDateMutation();
    const dispatch = useAppDispatch();

    const options = [
        {
            label: "Дата",
            value: "date",
            selectedBackgroundColor: "#94BF5E",
        },
        {
            label: "Период",
            value: "period",
            selectedBackgroundColor: "#94BF5E",
        },
    ];

    dayjs.extend(customParseFormat);
    dayjs.extend(utc);

    function convertToISO8601(timeString: string): string {
        const parsedTime = dayjs(timeString, {format: "YYYY-MM-DD HH:mm:ss"});
        const iso8601Time = parsedTime.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        return iso8601Time;
    }

    const handleChange = (time: never, timeString: string) => {
        setTimeData(timeString);
    };

    const onChange = (newValue: timeFormatEnum) => {
        setTimeFormat(newValue);
        dispatch(setType())
    };

    async function handleData() {
        if (timeFormat === timeFormatEnum.DATE) {
            mutation({start_date: convertToISO8601(timeData)});
        } else {
            mutation({
                start_date: convertToISO8601(timeData[0]),
                end_date: convertToISO8601(timeData[1]),
            });
        }
    }

    useEffect(() => {
        if (data) {
            dispatch(setData(data));
        }
    }, [data]);

    return (
        <div className={cls.container}>
            <div className="your-required-wrapper" style={{width: 200, height: 30}}>
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                    fontSize={16}
                    backgroundColor={"#fff"}
                    fontColor={"#94BF5E"}
                    border={"1px solid #94BF5E"}
                />
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#94BF5E",
                    },
                }}
            >
                {timeFormat === timeFormatEnum.PERIOD ? (
                    <DatePicker.RangePicker
                        placeholder={["Время начала", "Время конца"]}
                        onChange={handleChange}
                        showTime
                    />
                ) : (
                    <DatePicker
                        onChange={handleChange}
                        showTime
                        placeholder="Дата и время"
                    />
                )}
            </ConfigProvider>
            <button disabled={!timeData} onClick={handleData} className={cls.button}>
                Показать
            </button>
        </div>
    );
}

export default Filters;
