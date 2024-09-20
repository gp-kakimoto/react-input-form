import { useCallback, useEffect, useState } from "react";
import { FormContainer } from "../FormContainer";
export const FormOfPhoneNumber = (props) => {
  /* 電話番号を保存するための変数 */
  const [phoneNumber, setPhoneNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
  });
  /* 電話番号が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [phoneNumberError, setPhoneNumberError] =
    useState("電話番号の入力は必須です");

  const checkPhoneNumber = () => {
    console.log(phoneNumber.number1);
    console.log(phoneNumber.number2);
    console.log(phoneNumber.number3);
    if (
      phoneNumber.number1.length === 0 ||
      phoneNumber.number2.length === 0 ||
      phoneNumber.number3.length === 0
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "電話番号は必須項目です。";
      });
      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }

    if (phoneNumber.number1.length < 2) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false NOT 03 06 Format");
        return "入力された電話番号は正しくありません";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }
    /* 東京03のチェック 大阪06のチェック*/
    if (
      (phoneNumber.number1 === "03" || phoneNumber.number1 === "06") &&
      (phoneNumber.number2.length !== 4 || phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false NOT 03 06 Format");
        return "入力された電話番号は正しくありません";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }

    if (
      phoneNumber.number1.length === 2 &&
      phoneNumber.number1 !== "03" &&
      phoneNumber.number1.length === 2 &&
      phoneNumber.number1 !== "06"
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false NOT 03 06 Format");
        return "入力された電話番号は正しくありません";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }

    /*携帯電話及びIP電話のチェック*/
    if (
      phoneNumber.number1.match(/^0[5-9]0/) &&
      (phoneNumber.number2.length !== 4 || phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
      });

      props.setFlagOfForm((old) => {
        return { ...old, flagOfPhoneNumber: false };
      });
      return;
    }
    /*東京03 大阪06以外の固定電話のチェック*/
    if (
      phoneNumber.number1.length !== 2 &&
      ((!phoneNumber.number1.match(/^0[5-9]0/) &&
        ((phoneNumber.number1.length === 3 &&
          phoneNumber.number2.length !== 3) ||
          (phoneNumber.number1.length === 4 &&
            phoneNumber.number2.length !== 2) ||
          (phoneNumber.number1.length === 5 &&
            phoneNumber.number2.length !== 1))) ||
        phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
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
      return checkPhoneNumber;
    }),
      [];
  }, [phoneNumber.number1, phoneNumber.number2, phoneNumber.number3]);
  const handlePhoneNumber1 = useCallback(
    (e) => {
      /*if (e.target.value.trim().match(/[^0-9０-９]+/)) {*/
      if (e.target.value.trim().match(/[^0-9]+/)) {
        /*alert("数字を入力してください");*/
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
      }

      if (e.target.value.trim().length > 5) {
        setPhoneNumberError(() => {
          return "市外局番は5桁以下です";
        });
      }

      setPhoneNumber((old) => {
        return {
          ...old,
          number1: e.target.value,
        };
      });

      setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 &&
          phoneNumber.number2.length !== 0 &&
          phoneNumber.number3.length !== 0
          ? ""
          : "電話番号の入力は必須です";
      });
    },

    [phoneNumber.number2, phoneNumber.number3]
  );

  const handlePhoneNumber2 = useCallback(
    (e) => {
      /*if (e.target.value.trim().match(/[^0-9０-９]+/)) {*/
      if (e.target.value.trim().match(/[^0-9]+/)) {
        /*alert("数字を入力してください");*/
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfPhoneNumber: false };
        });
        return;
      }

      if (e.target.value.trim().length > 4) {
        setPhoneNumberError(() => {
          return "市内局番は4桁以下です";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfPhoneNumber: false };
        });
        return;
      }
      console.log("This is handlePhoneNumber2 process .... ");
      setPhoneNumber((old) => {
        console.log("This is setPhoneNumber of handlePhoneNumber2 preocess...");
        return {
          ...old,
          number2: e.target.value.trim(),
        };
      });

      setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 &&
          phoneNumber.number1.length !== 0 &&
          phoneNumber.number3.length !== 0
          ? ""
          : "電話番号の入力は必須です";
      });
    },
    [phoneNumber.number1, phoneNumber.number3]
  );

  const handlePhoneNumber3 = useCallback(
    (e) => {
      /*if (e.target.value.trim().match(/[^0-9０-９]+/)) {*/
      if (e.target.value.trim().match(/[^0-9]+/)) {
        /*alert("数字を入力してください");*/
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfPhoneNumber: false };
        });
        return;
      }

      if (e.target.value.trim().length > 4) {
        setPhoneNumberError(() => {
          return "加入者番号は4桁です";
        });
        props.setFlagOfForm((old) => {
          return { ...old, flagOfPhoneNumber: false };
        });
        return;
      }

      console.log("This is handlePhoneNumber3 process .... ");
      setPhoneNumber((old) => {
        console.log("This is setPhoneNumber of handlePhoneNumber3 preocess...");
        return {
          ...old,
          number3: e.target.value.trim(),
        };
      });

      setPhoneNumberError(() => {
        return e.target.value.trim().length !== 0 &&
          phoneNumber.number1.length !== 0 &&
          phoneNumber.number2.length !== 0
          ? ""
          : "電話番号の入力は必須です";
      });
    },
    [phoneNumber.number1, phoneNumber.number2]
  );

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
        />{" "}
        -
        <input
          type="text"
          value={phoneNumber.number2}
          onChange={handlePhoneNumber2}
        />{" "}
        -
        <input
          type="text"
          value={phoneNumber.number3}
          onChange={handlePhoneNumber3}
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
