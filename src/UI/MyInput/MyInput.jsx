import style from "./MyInput.module.css";

function MyInput({ error, ...props }) {
  return (
    <input
      className={`${style.input_element} ${error ? style.error_input : ""}`}
      {...props}
    />
  );
}

export default MyInput;
