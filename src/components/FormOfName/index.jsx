import styles from "./FormOfName.module.css";
import { useCallback } from "react";
export const FormOfName = (props) => {
  const handleNameChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }

    props.setName(() => {
      return e.target.value;
    });
    props.setNameError(() => {
      return e.target.value.trim().length !== 0 ? "" : "名前の入力は必須です";
    });
  }, []);

  const properties = {
    label: "名前",
    required: "必須",
  };
  return (
    <dl className={styles.inputform_dl}>
      <dt className={styles.inputform_dl_dt}>
        <label htmlFor="name">{properties.label}</label>
        <span>{properties.required}</span>
      </dt>
      <dd className={styles.inputform_dl_dd}>
        <input
          className={styles.inputform_dl_dd_input}
          type="text"
          value={props.name}
          onChange={handleNameChange}
        />
        <p className={styles.inputform_dl_dd_p}>{props.nameError}</p>
      </dd>
    </dl>
  );
};
