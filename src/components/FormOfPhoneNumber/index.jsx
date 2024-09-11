import styles from "./FormOfPhoneNumber.module.css";
import { useCallback } from "react";

export const FormOfPhoneNumber = (props) => {
  /* 電話番号を保存するための変数 */
  /*  const [phoneNumber, setPhoneNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
  }); */
  /* 電話番号が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  /*   const [phoneNumberError, setPhoneNumberError] =
    useState("電話番号の入力は必須です");
 */

  const handlePhoneNumber1 = useCallback(
    (e) => {
      if (e.target.value.trim().match(/[^0-9０-９]+/)) {
        /*alert("数字を入力してください");*/
        props.setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        return;
      }

      if (e.target.value.trim().length > 5) {
        props.setPhoneNumberError(() => {
          return "市外局番は5桁以下です";
        });
        return;
      }

      props.setPhoneNumber((old) => {
        return {
          ...old,
          number1: e.target.value.trim(),
        };
      });

      props.setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 &&
          props.phoneNumber.number2.length !== 0 &&
          props.phoneNumber.number3.length !== 0
          ? ""
          : "電話番号の入力は必須です";
      });
    },
    [props.phoneNumber.number2, props.phoneNumber.number3]
  );

  const handlePhoneNumber2 = useCallback(
    (e) => {
      if (e.target.value.trim().match(/[^0-9０-９]+/)) {
        /*alert("数字を入力してください");*/
        props.setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        return;
      }

      if (e.target.value.trim().length > 4) {
        props.setPhoneNumberError(() => {
          return "市内局番は4桁以下です";
        });
        return;
      }
      /*
      setPhoneNumberError(() => {
        return "";
      });*/
      console.log("This is handlePhoneNumber2 process .... ");
      /*if (e.target.value.trim().length === 0) {*/
      props.setPhoneNumber((old) => {
        console.log("This is setPhoneNumber of handlePhoneNumber2 preocess...");
        return {
          ...old,
          number2: e.target.value.trim(),
        };
      });

      props.setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 &&
          props.phoneNumber.number1.length !== 0 &&
          props.phoneNumber.number3.length !== 0
          ? ""
          : "電話番号の入力は必須です";
      });
    },
    [props.phoneNumber.number1, props.phoneNumber.number3]
  );

  const handlePhoneNumber3 = useCallback(
    (e) => {
      if (e.target.value.trim().match(/[^0-9０-９]+/)) {
        /*alert("数字を入力してください");*/
        props.setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        return;
      }

      if (e.target.value.trim().length > 4) {
        props.setPhoneNumberError(() => {
          return "加入者番号は4桁です";
        });
        return;
      }
      /*      setPhoneNumberError(() => {
        return "";
      });*/

      console.log("This is handlePhoneNumber3 process .... ");
      props.setPhoneNumber((old) => {
        console.log("This is setPhoneNumber of handlePhoneNumber3 preocess...");
        return {
          ...old,
          number3: e.target.value.trim(),
        };
      });

      props.setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 &&
          props.phoneNumber.number1.length !== 0 &&
          props.phoneNumber.number2.length !== 0
          ? ""
          : "電話番号の入力は必須です";
      });
    },
    [props.phoneNumber.number1, props.phoneNumber.number2]
  );

  const properties = {
    label: "電話番号",
    required: "必須",
  };
  return (
    <dl className={styles.inputform_dl}>
      <dt className={styles.inputform_dl_dt}>
        <label htmlFor="tel1">{properties.label}</label>
        <span>{properties.required}</span>
      </dt>
      <dd className={styles.inputform_dl_dd}>
        <input
          type="text"
          value={props.phoneNumber.number1}
          onChange={handlePhoneNumber1}
        />{" "}
        -
        <input
          type="text"
          value={props.phoneNumber.number2}
          onChange={handlePhoneNumber2}
        />{" "}
        -
        <input
          type="text"
          value={props.phoneNumber.number3}
          onChange={handlePhoneNumber3}
        />
        <p className={styles.inputform_dl_dd_p}>{props.phoneNumberError}</p>
      </dd>
    </dl>
  );
};
