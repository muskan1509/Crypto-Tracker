import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/sampleCryptoData";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: data,
  reducers: {
    updatePrices: (state, action) => {
      return action.payload;
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;