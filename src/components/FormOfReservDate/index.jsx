import styles from "./FormOfReservDate.module.css";
import { useCallback, useMemo } from "react";

export const FormOfReservDate = (props) => {
  /*  
  const [reservDate, setReservDate] = useState("");
  const [reservDateError, setReservDateError] =
    useState("予約日の入力は必須です");

 */

  const now = new Date();
  const nowMonth =
    now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;

  const nowDate = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();

  const nowYear = now.getFullYear();
  console.log(`nowDate=${nowDate}`);
  const today = useMemo(() => {
    return nowYear + "-" + nowMonth + "-" + nowDate;
  }, [nowYear, nowMonth, nowDate]);
  console.log(`today = ${today}`);

  const handleReservDate = useCallback((e) => {
    const now = new Date();
    /*今日の日付を保持するための変数*/
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    console.log(e.target.value);
    const targetDate = new Date(e.target.value.trim());
    console.log(`today=${today}`);
    console.log(`targetDate=${targetDate}`);
    /*  予約日が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
    if (e.target.value.trim().length === 0) {
      props.setReservDate(() => {
        return "";
      });
      props.setReservDateError(() => {
        return "予約日の入力は必須です";
      });
    } else {
      /*日付が過去のものでないかチェックする*/
      if (today > targetDate) {
        props.setReservDate(() => {
          return "";
        });
        props.setReservDateError(() => {
          return "予約日の入力は必須です";
        });
      } else {
        props.setReservDate(() => {
          return e.target.value.trim();
        });
        props.setReservDateError(() => {
          return "";
        });
      }
    }
  }, []);

  const properties = {
    htmlFor: "reservation",
    label: "予約日",
    required: "必須",
  };

  return (
    <dl className={styles.inputform_dl}>
      <dt className={styles.inputform_dl_dt}>
        <label htmlFor={properties.htmlFor}>{properties.label}</label>
        <span>{properties.required}</span>
      </dt>
      <dd className={styles.inputform_dl_dd}>
        <input
          type="date"
          min={today}
          value={props.reservDate}
          onChange={handleReservDate}
        />{" "}
        13時 ～ 14時
        <p className={styles.inputform_dl_dd_p}>{props.reservDateError}</p>
      </dd>
    </dl>
  );
};
