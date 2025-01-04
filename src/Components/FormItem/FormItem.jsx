import MyInput from "../../UI/MyInput/MyInput";
import style from "./FormItem.module.css";

function FormItem({
  formTitle,
  oneDescription,
  twoDescription,
  element,
  placeholder,
  inputProps,
  errors,
}) {
  return (
    <div className={style.item_container}>
      <span className={style.item__title}>{formTitle}</span>
      <MyInput
        placeholder={placeholder}
        {...inputProps}
        error={errors !== undefined}
      />
      <div className={style.container__description}>
        <span className={style.description}>
          {oneDescription}
          <span className={style.element_desc}>{element}</span>
        </span>
        <span className={style.description}>{twoDescription}</span>
      </div>
      {errors && <span className={style.error_message}>{errors.message}</span>}
    </div>
  );
}

export default FormItem;
