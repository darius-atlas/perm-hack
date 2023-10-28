import {createSlice} from "@reduxjs/toolkit";
import {timeFormatEnum} from "@perm-hack/ui";


export interface IStatFilters {
    data: {
        start_date: string
    } | {
        start_data: string,
        end_date: string
    } | {}
    type: "date" | "period"
}

const initialState: IStatFilters = {
    data: {},
    type: "date"
}
const statisticsFilterSlice = createSlice({
    name: "statFilter",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setType: (state, action) => {
            state.type = state.type === "date" ? "period" : "date"
        }
    }
})
export const {setData, setType} = statisticsFilterSlice.actions;
export default statisticsFilterSlice.reducer
