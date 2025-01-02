import style from "./MyInput.module.css";

function MyInput(props) {
  return <input className={style.input_element} {...props} type="number"/>
}

export default MyInput;
