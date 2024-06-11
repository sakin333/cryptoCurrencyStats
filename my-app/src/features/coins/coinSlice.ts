import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Coin, InitialState } from "./coinTypes";

const initialState: InitialState = {
  loading: false,
  coins: [],
  error: null,
};

const API_KEY = "e12746aceamsh699f10be78982b1p1af910jsn0cc3c4d70ec0";
const BASE_URL = "https://coinranking1.p.rapidapi.com/coins";

const fetchCoins = createAsyncThunk("coins/fetchCoins", async () => {
  const response = await axios.get(BASE_URL, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  });

  return response.data.data.coins;
});

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action: PayloadAction<Coin[]>) => {
        state.loading = false;
        state.coins = action.payload;
        state.error = null;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        (state.loading = false),
          (state.coins = []),
          (state.error = action.error.message || "Something went wrong");
      });
  },
});

export { fetchCoins };
export default coinSlice.reducer;
