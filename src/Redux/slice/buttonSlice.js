import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    active: false,
  },
  reducers: {
    toggleActive(state) {
      state.active = !state.active;
    },
  },
});

export const { toggleActive } = buttonSlice.actions;
export default buttonSlice.reducer;
