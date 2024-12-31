import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../slice/buttonSlice";
import modeSwitching from "../slice/modeSwitching";
import popupSlice from "../slice/popupSlice";

const store = configureStore({
  reducer: {
    button: buttonReducer,
    modeSwitch: modeSwitching,
    popup: popupSlice,
  },
});
export default store;
