import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { adminReducer } from "./reducer/adminReducer";
import { clientReducer } from "./reducer/clientReducer";

export const store = configureStore({
    reducer: {
        admin: adminReducer.reducer,
        client: clientReducer.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
