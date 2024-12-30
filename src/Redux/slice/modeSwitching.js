import { createSlice } from "@reduxjs/toolkit";

const modeSwitching = createSlice({
  name: "ModeSwitch",
  initialState: {
    buy: false,
    sell: true,
  },
  reducers: {
    clickBuy: (state) => {
      state.buy = false;
      state.sell = true;
    },
    clickSell: (state) => {
      state.buy = true;
      state.sell = false;
    },
  },
});

export const { clickBuy, clickSell } = modeSwitching.actions;

export default modeSwitching.reducer;
