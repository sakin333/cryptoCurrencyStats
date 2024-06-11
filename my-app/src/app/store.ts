import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coins/coinSlice";

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;