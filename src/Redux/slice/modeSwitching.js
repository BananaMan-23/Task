import { createSlice } from "@reduxjs/toolkit";

const modeSwitching = createSlice({
  name: "ModeSwitch",
  initialState: {
    buy: false,
    sell: true,
  },
  reducers: {
    clickBuy: (state) => {
      state.buy = !state.buy;
      state.sell = !state.sell;
    },
    clickSell: (state) => {
      state.buy = !state.buy;
      state.sell = !state.sell;
    },
  },
});

export const { clickBuy, clickSell } = modeSwitching.actions;

export default modeSwitching.reducer;
