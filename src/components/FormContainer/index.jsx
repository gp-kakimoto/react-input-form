import styles from "./FormContainer.module.css";
export const FormContainer = (props) => {
  /* const properties = {
    label: "名前",
    required: "必須",
  }; */
  return (
    <dl className={styles.inputform_dl}>
      <dt className={styles.inputform_dl_dt}>
        <label htmlFor={props.properties.htmlFor}>
          {props.properties.label}
        </label>
        <span>{props.properties.required}</span>
      </dt>
      <dd className={styles.inputform_dl_dd}>
        {props.input}
        {/* <input
          className={styles.inputform_dl_dd_input}
          type="text"
          value={props.name}
          onChange={handleNameChange}
        />
 */}{" "}
        <p className={styles.inputform_dl_dd_p}>{props.errorMessage}</p>
      </dd>
    </dl>
  );
};
