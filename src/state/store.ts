import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { companyApi } from "./api/companyApi";
import company from "./slice/companySlice";

export const config = configureStore({
  reducer: {
    [companyApi.reducerPath]: companyApi.reducer,
    company,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companyApi.middleware),
});

export const createStore = () => config;

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const storeModule = {
  useAppSelector,
};

export default storeModule;
