import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer, RootState } from "../modules";
import listenerMiddleware from "../middlewares/listeners";
import type { TypedUseSelectorHook } from 'react-redux';
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([listenerMiddleware.middleware]),
})


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;