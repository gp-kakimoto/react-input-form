import styles from "./FormOfName.module.css";
import { useCallback, useState } from "react";
export const FormOfName = (props) => {
  /* 名前を保存する変数とsetするための関数 */
  const [name, setName] = useState("");
  /* 名前が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [nameError, setNameError] = useState("名前の入力は必須です");

  const handleNameChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }

    setName(() => {
      return e.target.value;
    });
    /*
    setNameError(() => {
      return e.target.value.trim().length !== 0 ? "" : "名前の入力は必須です";
    });*/

    if (e.target.value.trim().length === 0) {
      setNameError(() => {
        return "名前の入力は必須です。";
      });
      props.setFlagOfForm((old) => {
        return { ...old, flagOfName: false };
      });
    } else {
      setNameError(() => {
        return "";
      });
      props.setFlagOfForm((old) => {
        return { ...old, flagOfName: true };
      });
    }
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
          value={name}
          id="name"
          onChange={handleNameChange}
        />
        <p className={styles.inputform_dl_dd_p}>{nameError}</p>
      </dd>
    </dl>
  );
};
