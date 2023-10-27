import cls from './filters.module.scss';
import {ConfigProvider, DatePicker} from "antd";
import SwitchSelector from "react-switch-selector";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {useState} from "react";

/* eslint-disable-next-line */

enum timeFormatEnum {
  DATE = "date",
  PERIOD = "period"
}

export function Filters() {
  const [timeFormat, setTimeFormat] = useState<timeFormatEnum>(timeFormatEnum.DATE)
  const options = [
    {
      label: "Дата",
      value: "date",
      selectedBackgroundColor: "#94BF5E"
    },
    {
      label: "Период",
      value: "period",
      selectedBackgroundColor: "#94BF5E"
    },
  ]

  const handleChange = (time: never, timeString: string) => {
    console.log(timeString)
  }
  const onChange = (newValue: timeFormatEnum) => {
    setTimeFormat(newValue)
  };

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
      <ConfigProvider theme={{
        token: {
          colorPrimary: "#94BF5E"
        }
      }}>
        {timeFormat === timeFormatEnum.PERIOD ?
          <DatePicker.RangePicker placeholder={["Время начала", "Время конца"]} onChange={handleChange} showTime/> :
          <DatePicker onChange={handleChange} showTime placeholder="Дата и время"/>
        }
      </ConfigProvider>
      <button className={cls.button}>Показать</button>
    </div>
  );
}

export default Filters;
