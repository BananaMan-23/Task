import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleActive } from "../../Redux/slice/buttonSlice";
import style from "./ToggleButton.module.css";

function ToggleButton() {
  const dispath = useDispatch();
  const isActive = useSelector((state) => state.button.active);

  const handleToggle = () => {
    dispath(toggleActive());
  };

  return (
    <button
      className={`${style.btns} ${isActive ? style.btns_active : ""}`}
      onClick={handleToggle}
    >
      <div
        className={`${style.btns__element} ${
          isActive ? style.btns__active : style.btns__inActive
        }`}
      ></div>
    </button>
  );
}

export default ToggleButton;
