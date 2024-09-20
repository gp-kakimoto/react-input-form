import { useCallback, useMemo, useState } from "react";
import { FormContainer } from "../FormContainer";

export const FormOfReservDate = (props) => {
  /* 予約日を保存する変数とsetするための関数 */
  const [reservDate, setReservDate] = useState("");
  /*現在時刻を保持するための変数*/
  const [reservDateError, setReservDateError] =
    useState("予約日の入力は必須です");

  const now = new Date();
  const hour = now.getHours();
  if (hour >= 13) {
    now.setDate(now.getDate() + 1);
  }
  const nowMonth =
    now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;

  const nowDate = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const nowYear = now.getFullYear();
  const today = useMemo(() => {
    return nowYear + "-" + nowMonth + "-" + nowDate;
  }, [nowYear, nowMonth, nowDate]);

  const handleReservDate = useCallback((e) => {
    /*今日の日付を保持するための変数*/
    /* const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); */
    const targetDate = new Date(e.target.value.trim());
    /*  予約日が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
    if (e.target.value.trim().length === 0) {
      setReservDate(() => {
        return "";
      });
      setReservDateError(() => {
        return "予約日の入力は必須です";
      });
    } else {
      if (now.getDate() > targetDate.getDate()) {
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
  }, []);

  const properties = {
    htmlFor: "reservation",
    label: "予約日",
    required: "必須",
  };

  const input = () => {
    return (
      <div>
        <input
          type="date"
          min={today}
          value={reservDate}
          id={properties.htmlFor}
          onChange={handleReservDate}
        />{" "}
        13時 ～ 14時
      </div>
    );
  };

  return (
    <FormContainer
      properties={properties}
      input={input()}
      errorMessage={reservDateError}
    />
  );
};
