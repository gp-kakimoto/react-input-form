import styles from "./FormContainer.module.css";
export const FormContainer = (props) => {
  return (
    <dl className={styles.inputform_dl}>
      <dt className={styles.inputform_dl_dt}>
        <label htmlFor={props.properties.htmlFor}>
          {props.properties.label}
        </label>
        <span>{props.properties.required}</span>
      </dt>
      <dd className={styles.inputform_dl_dd}>
        {props.input}{" "}
        <p className={styles.inputform_dl_dd_p}>{props.errorMessage}</p>
      </dd>
    </dl>
  );
};
