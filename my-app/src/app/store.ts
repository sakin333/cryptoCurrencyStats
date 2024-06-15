import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coins/coinSlice";
import coinDetailsReducer from "../features/coinDetails/coinDetailsSlice";

const store = configureStore({
  reducer: {
    coins: coinReducer,
    coinDetails: coinDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
