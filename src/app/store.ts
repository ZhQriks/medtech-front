import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/auth/auth";
import message from "../features/auth/message";
import modalReducer from "../components/layout/Modal/+redux/modal.reducer";

const rootReducer = combineReducers({
  auth,
  message,
  modal: modalReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
