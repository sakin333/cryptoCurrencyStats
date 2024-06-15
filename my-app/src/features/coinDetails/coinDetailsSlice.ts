import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  loading: boolean;
  coinDetails: any;
  error: string | null;
};

const initialState: InitialState = {
  loading: false,
  coinDetails: {},
  error: null,
};

const API_KEY = "e12746aceamsh699f10be78982b1p1af910jsn0cc3c4d70ec0";
const BASE_URL = "https://coinranking1.p.rapidapi.com/coin";

const fetchCoinDetails = createAsyncThunk(
  "coinDetails/fetchCoinDetails",
  async (uuid: string) => {
    const response = await axios.get(`${BASE_URL}/${uuid}`, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      },
    });

    return response.data.data.coin;
  }
);

const coinDetailsSlice = createSlice({
  name: "coinDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCoinDetails.fulfilled,
        (state, action: PayloadAction<{}>) => {
          state.loading = false;
          state.coinDetails = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCoinDetails.rejected, (state, action) => {
        state.loading = false;
        state.coinDetails = {};
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export { fetchCoinDetails };
export default coinDetailsSlice.reducer;
