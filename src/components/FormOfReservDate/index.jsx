import styles from "./FormOfReservDate.module.css";
import { useCallback, useMemo, useState } from "react";

export const FormOfReservDate = (props) => {
  /*  
  const [reservDate, setReservDate] = useState("");
  const [reservDateError, setReservDateError] =
    useState("予約日の入力は必須です");

 */

  /* 予約日を保存する変数とsetするための関数 */
  const [reservDate, setReservDate] = useState("");
  /*現在時刻を保持するための変数*/
  const [reservDateError, setReservDateError] =
    useState("予約日の入力は必須です");

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
      setReservDate(() => {
        return "";
      });
      setReservDateError(() => {
        return "予約日の入力は必須です";
      });
    } else {
      /*日付が過去のものでないかチェックする*/
      if (today > targetDate) {
        setReservDate(() => {
          return "";
        });
        setReservDateError(() => {
          return "予約日の入力は必須です";
        });

        props.setFlagOfForm((old) => {
          return { ...old, flagOfReservDate: false };
        });
      } else {
        setReservDate(() => {
          return e.target.value.trim();
        });
        setReservDateError(() => {
          return "";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfReservDate: true };
        });
      }
    }
    /* 
    if (reservDate.length === 0) {
      setReservDateError(() => {
        return "予約日は必須項目です。";
      });
    } else {
      setReservDateError(() => {
        return "";
      });
    } */
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
          value={reservDate}
          onChange={handleReservDate}
        />{" "}
        13時 ～ 14時
        <p className={styles.inputform_dl_dd_p}>{reservDateError}</p>
      </dd>
    </dl>
  );
};
