import ResetButton from "../../UI/ResetButton/ResetButton";
import style from "./SelectMenu.module.css";
import { useDispatch } from "react-redux";
import { closePopup } from "../../Redux/slice/popupSlice";

function SelectMenu({ title, span, menuList, onSelectChange, selectedValue }) {
  const dispatch = useDispatch();

  const handleSelection = (selection) => {
    onSelectChange(selection);
    dispatch(closePopup());
  };

  return (
    <div className={style.overlay}>
      <div className={style.select__container}>
        <div className={style.select__header}>
          <ResetButton onClick={() => dispatch(closePopup())} />
          <h2 className={style.select__title}>{title}</h2>
        </div>
        <div className={style.select__main}>
          <span className={style.select__main_span}>{span}</span>
          <ul className={style.select__list}>
            {menuList.map((item, index) => (
              <li
                key={index}
                className={`${style.select__item} ${
                  item === selectedValue ? style.selected : ""
                }`}
                onClick={() => handleSelection(item)}
              >
                {item}
                <div
                  className={`${style.select__icon} ${
                    item === selectedValue ? style.select__icon_active : ""
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectMenu;
