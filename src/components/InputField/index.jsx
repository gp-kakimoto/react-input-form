import styles from "./InputField.module.css";
export const InputField = (props) => {
  const { label, required, errorMessage, children } = props;
  const inputId = children?.props?.id;

  return (
    <dl className={styles.inputform_dl}>
      <dt className={styles.inputform_dl_dt}>
        <label htmlFor={inputId}>{label}</label>
        <span>{required && "必須"}</span>
      </dt>
      <dd className={styles.inputform_dl_dd}>
        {children}
        <p className={styles.inputform_dl_dd_p}>{errorMessage}</p>
      </dd>
    </dl>
  );
};
