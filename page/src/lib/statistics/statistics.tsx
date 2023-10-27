import cls from './statistics.module.scss';
import {Filters} from "@perm-hack/ui";

/* eslint-disable-next-line */
export interface StatisticsProps {}

export function Statistics(props: StatisticsProps) {
  return (
    <div className={cls.container}>
      <Filters/>
    </div>
  );
}

export default Statistics;
