import cls from './statistics.module.scss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Filters, Sidebar, StatisticsCharts} from "@perm-hack/ui";
import {useState} from "react";

/* eslint-disable-next-line */
export interface StatisticsProps {
}

export function Statistics(props: StatisticsProps) {
    return (
        <div className={cls.container}>
            <Filters/>
            <StatisticsCharts/>
        </div>
    );
}

export default Statistics;
