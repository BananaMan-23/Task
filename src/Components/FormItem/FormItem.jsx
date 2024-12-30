import MyInput from "../../UI/MyInput/MyInput";
import style from "./FormItem.module.css";

function FormItem({ formTitle, oneDescription, twoDescription, placeholder }) {
  return (
    <div className={style.item_container}>
      <span className={style.item__title}>{formTitle}</span>
      <MyInput placeholder={placeholder} />
      <div className={style.container__description}>
        <span className={style.description}>{oneDescription}</span>
        <span className={style.description}>{twoDescription}</span>
      </div>
    </div>
  );
}

export default FormItem;
