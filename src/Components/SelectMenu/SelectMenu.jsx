import { useState } from "react";
import ResetButton from "../../UI/ResetButton/ResetButton";
import style from "./SelectMenu.module.css";
import { useDispatch } from "react-redux";
import { closePopup } from "../../Redux/slice/popupSlice";
import { closeFooterPopup } from "../../Redux/slice/footerPopupSlice";
import ButtonContinue from "../../UI/ButtonContinue/ButtonContinue";

function SelectMenu({ title, span, menuList, onSelectChange, selectedValue }) {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(selectedValue);

  const handleSelection = (selection) => {
    setSelectedItem(selection);
  };

  const handleDone = () => {
    onSelectChange(selectedItem);
    dispatch(closePopup());
    dispatch(closeFooterPopup())
  };

  return (
    <div className={style.overlay}>
      <div className={style.select__container}>
        <div className={style.select__header}>
          <ResetButton onClick={handleDone} />
          <h2 className={style.select__title}>{title}</h2>
        </div>
        <div className={style.select__main}>
          <div>
            <span className={style.select__main_span}>{span}</span>
            <ul className={style.select__list}>
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`${style.select__item} ${
                    item === selectedItem ? style.selected : ""
                  }`}
                  onClick={() => handleSelection(item)}
                >
                  {item}
                  <div
                    className={`${style.select__icon} ${
                      item === selectedItem ? style.select__icon_active : ""
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.select__footer}>
            <ButtonContinue onClick={handleDone}>Done</ButtonContinue>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectMenu;
