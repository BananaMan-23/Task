import style from "./MyInput.module.css";

function MyInput(props) {
  return <input className={style.input_element} {...props} type="text"/>
}

export default MyInput;
