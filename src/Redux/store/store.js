import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../slice/buttonSlice";
import modeSwitching from "../slice/modeSwitching";
const store = configureStore({
  reducer: {
    button: buttonReducer,
    modeSwitch: modeSwitching,
  },
});
export default store;
