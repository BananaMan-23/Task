import style from "./ButtonContinue.module.css";

function ButtonContinue({ children, ...props }) {
  return (
    <button {...props} className={style.button_continue}>
      {children}
    </button>
  );
}

export default ButtonContinue;
