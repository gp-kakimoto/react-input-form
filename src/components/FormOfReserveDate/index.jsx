import { useCallback, useEffect, useMemo, useState } from "react";
import { InputField } from "../InputField";

export const FormOfReserveDate = (props) => {
  /* 予約日を保存する変数とsetするための関数 */
  const [reserveDate, setReserveDate] = useState("");
  /*現在時刻を保持するための変数*/
  const [reserveDateError, setReserveDateError] = useState("");

  const now = new Date();
  if (now.getHours() >= 13) {
    now.setDate(now.getDate() + 1);
  }

  const today = useMemo(() => {
    return now
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join("-");
  }, []);

  const checkReserveDate = () => {
    setReserveDateError(() => {
      return reserveDate.length === 0 ? "予約日の入力は必須です" : "";
    });

    props.setFlagOfForm((old) => {
      return reserveDate.length === 0
        ? { ...old, flagOfReserveDate: false }
        : { ...old, flagOfReserveDate: true };
    });
  };

  useEffect(() => {
    props.setCheckReserveDateOfP(() => {
      return checkReserveDate;
    });
  }, [reserveDate]);

  const handleReserveDate = useCallback((e) => {
    const targetDate = new Date(e.target.value.trim());

    if (
      e.target.value.trim().length === 0 ||
      now.getFullYear() > targetDate.getFullYear() ||
      now.getMonth() > targetDate.getMonth()
    ) {
      setReserveDate(() => {
        return "";
      });
      setReserveDateError(() => {
        return "予約日の入力は必須です";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfReserveDate: false };
      });
      return;
    }

    if (
      now.getFullYear() === targetDate.getFullYear() &&
      now.getMonth() === targetDate.getMonth() &&
      now.getDate() > targetDate.getDate()
    ) {
      setReserveDate(() => {
        return "";
      });
      setReserveDateError(() => {
        return "予約日の入力は必須です";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfReserveDate: false };
      });
      return;
    }

    setReserveDate(() => {
      return e.target.value.trim();
    });
    setReserveDateError(() => {
      return "";
    });
    props.setFlagOfForm((old) => {
      return { ...old, flagOfReserveDate: true };
    });
  }, []);

  const properties = {
    htmlFor: "reservation",
    label: "予約日",
    required: true,
    name: "reservation",
  };

  return (
    <InputField
      label={properties.label}
      required={properties.required}
      errorMessage={reserveDateError}
    >
      <div>
        <input
          type="date"
          min={today}
          value={reserveDate}
          id={properties.htmlFor}
          name={properties.name}
          onChange={handleReserveDate}
        />{" "}
        13時 ～ 14時
      </div>
    </InputField>
  );
};
