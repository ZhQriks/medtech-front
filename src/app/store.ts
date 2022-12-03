import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/auth/auth";
import message from "../features/auth/message";
import modalReducer from "../components/layout/Modal/+redux/modal.reducer";
import { allApi } from "../features/all.api";

const rootReducer = combineReducers({
  auth,
  message,
  modal: modalReducer,
  [allApi.reducerPath]: allApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(allApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
