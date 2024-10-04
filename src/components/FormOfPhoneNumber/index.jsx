import { useCallback, useEffect, useState } from "react";
import { FormContainer } from "../FormContainer";
import { parsePhoneNumber } from "libphonenumber-js/max";

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

  const handlePhoneNumber1 = useCallback(
    (e) => {
      test(e, "number1", "number2", "number3", 5);
    },
    [phoneNumber.number2, phoneNumber.number3]
  );

  const handlePhoneNumber2 = useCallback(
    (e) => {
      test(e, "number2", "number1", "number3", 4);
    },
    [phoneNumber.number1, phoneNumber.number3]
  );

  const handlePhoneNumber3 = useCallback(
    (e) => {
      test(e, "number3", "number1", "number2", 4);
    },
    [phoneNumber.number1, phoneNumber.number2]
  );

  const test = (e, index1, index2, index3, phoneNumberLength) => {
    {
      if (e.target.value.trim().match(/[^0-9]+/)) {
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfPhoneNumber: false };
        });
        return;
      }

      if (e.target.value.trim().length > phoneNumberLength) {
        return;
      }

      setPhoneNumber((old) => {
        return {
          ...old,
          [index1]: e.target.value.trim(),
        };
      });

      setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 ||
          phoneNumber[index2].length !== 0 ||
          phoneNumber[index3].length !== 0
          ? ""
          : "電話番号の入力は必須です。";
      });
    }
  };

  const properties = {
    htmlFor: "tel1",
    label: "電話番号",
    required: "必須",
  };

  const input = () => {
    return (
      <div>
        <input
          type="text"
          value={phoneNumber.number1}
          id={properties.htmlFor}
          onChange={handlePhoneNumber1}
          maxLength={5}
        />{" "}
        -
        <input
          type="text"
          value={phoneNumber.number2}
          onChange={handlePhoneNumber2}
          maxLength={4}
        />{" "}
        -
        <input
          type="text"
          value={phoneNumber.number3}
          onChange={handlePhoneNumber3}
          maxLength={4}
        />
      </div>
    );
  };

  return (
    <FormContainer
      properties={properties}
      input={input()}
      errorMessage={phoneNumberError}
    />
  );
};
