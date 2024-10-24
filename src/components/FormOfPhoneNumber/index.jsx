import { useCallback, useEffect, useState } from "react";
import { parsePhoneNumber } from "libphonenumber-js/max";
import { InputField } from "../InputField";

export const FormOfPhoneNumber = (props) => {
  /* 電話番号を保存するための変数 */
  const [phoneNumber, setPhoneNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
  });
  /* 電話番号が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const checkPhoneNumberNew = () => {
    if (
      phoneNumber.number1.length === 0 ||
      phoneNumber.number2.length === 0 ||
      phoneNumber.number3.length === 0
    ) {
      setPhoneNumberError(() => {
        return "電話番号の入力は必須です。";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }

    const tmpParsePhoneNumber = parsePhoneNumber(
      "+81" + phoneNumber.number1 + phoneNumber.number2 + phoneNumber.number3
    );

    if (!tmpParsePhoneNumber.isValid()) {
      setPhoneNumberError(() => {
        return "電話番号は正しくありません。";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }

    props.setFlagOfForm((old) => {
      return { ...old, flagOfPhoneNumber: true };
    });
  };

  useEffect(() => {
    props.setCheckPhoneNumberofP(() => {
      return checkPhoneNumberNew;
    });
  }, [phoneNumber]);

  const handlePhoneNumber = useCallback(
    (e) => {
      const { name, value, maxLength } = e.target;

      if (value.trim().match(/[^0-9]+/)) {
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfPhoneNumber: false };
        });
        return;
      }

      if (value.trim().length > maxLength) {
        return;
      }

      const newPhoneNumber = { ...phoneNumber, [name]: value.trim() };
      setPhoneNumber(newPhoneNumber);
      setPhoneNumberError(() => {
        return newPhoneNumber.number1.length !== 0 ||
          newPhoneNumber.number2.length !== 0 ||
          newPhoneNumber.number3.length !== 0
          ? ""
          : "電話番号の入力は必須です。";
      });
    },
    [phoneNumber]
  );

  const properties = {
    htmlFor: "tel1",
    label: "電話番号",
    required: true,
    name1: "number1",
    name2: "number2",
    name3: "number3",
  };

  return (
    <InputField
      label={properties.label}
      id={properties.htmlFor}
      required={properties.required}
      errorMessage={phoneNumberError}
    >
      <div>
        <input
          type="text"
          value={phoneNumber.number1}
          id={properties.htmlFor}
          name={properties.name1}
          onChange={handlePhoneNumber}
          maxLength={5}
        />{" "}
        -
        <input
          type="text"
          value={phoneNumber.number2}
          name={properties.name2}
          onChange={handlePhoneNumber}
          maxLength={4}
        />{" "}
        -
        <input
          type="text"
          value={phoneNumber.number3}
          name={properties.name3}
          onChange={handlePhoneNumber}
          maxLength={4}
        />
      </div>
    </InputField>
  );
};
