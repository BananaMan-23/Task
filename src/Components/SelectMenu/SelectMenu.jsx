import ResetButton from "../../UI/ResetButton/ResetButton";
import style from "./SelectMenu.module.css";

function SelectMenu({ title, span, menuList }) {
  return (
    <div className={style.select__container}>
      <div className={style.select__header}>
        <ResetButton />
        <h2 className={style.select__title}>{title}</h2>
      </div>
      <div className={style.select__main}>
        <span className={style.select__main_span}>{span}</span>
        <ul className={style.select__list}>
          {menuList.map((item, index) => (
            <li key={index} className={style.select__item}>
              {item}
              <div className={style.select__icon}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectMenu;
