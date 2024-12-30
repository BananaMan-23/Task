import style from "./ContainerConfig.module.css";

function ContainerConfig({ children, title, value }) {
  return (
    <div className={style.container__config}>
      <p className={style.container__title}>
        {title} /{" "}
        <span className={style.container__subtitle}>{value}</span>
      </p>
      {children}
    </div>
  );
}

export default ContainerConfig;
