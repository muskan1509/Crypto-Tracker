import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./CryptoSlice";

export default configureStore({
  reducer: {
    crypto: cryptoReducer
  }
});