import style from "./ModeSwitchButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clickBuy, clickSell } from "../../Redux/slice/modeSwitching";
function ModeSwitchButton() {
  const dispatch = useDispatch();
  const { buy, sell } = useSelector((state) => state.modeSwitch);

  const clickButtonBuy = () => {
    dispatch(clickBuy());
  };
  const clickButtonSell = () => {
    dispatch(clickSell());
  };

  return (
    <div className={style.mode_container}>
      <div onClick={clickButtonBuy} className={style.mode_button}>
        Buy
      </div>
      <div onClick={clickButtonSell} className={style.mode_button}>
        Sell
      </div>
      <div
        className={`${style.element} ${
          buy ? style.element_right : style.element_left
        }`}
      ></div>
    </div>
  );
}

export default ModeSwitchButton;
