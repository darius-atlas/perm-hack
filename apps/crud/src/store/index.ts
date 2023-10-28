import {configureStore} from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import statisticsFilterSlice from "./features/statisticsFilterSlice";
import {statisticsFilterApi} from "./services/statisticsFilterApi";

const store = configureStore({
    reducer: {
        statFilter: statisticsFilterSlice,
        [statisticsFilterApi.reducerPath]: statisticsFilterApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(statisticsFilterApi.middleware),
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: (data: any) => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
