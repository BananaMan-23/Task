import ModeSwitchButton from "../../UI/ModeSwitchButton/ModeSwitchButton";
import ResetButton from "../../UI/ResetButton/ResetButton";
import style from "./Header.module.css";
function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__reset_btns}>
          <ResetButton />
        </div>

        <h1 className={style.header__title}>Create an Add</h1>
      </div>
      <div className={style.header__nav}>
        <span className={style.header__span}>Step 1 of 4</span>
        <ModeSwitchButton />
      </div>
    </div>
  );
}

export default Header;
