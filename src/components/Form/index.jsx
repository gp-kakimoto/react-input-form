import styles from "./Form.module.css";
import { useCallback, useState } from "react";
import { FormOfName } from "../FormOfName";
import { FormOfPhoneNumber } from "../FormOfPhoneNumber";
import { FormOfReservDate } from "../FormOfReservDate";
import { FormOfMeetingPlace } from "../FormOfMeetingPlace";
export const Form = () => {
  const [flagOfForm, setFlagOfForm] = useState({
    flagOfName: false,
    flagOfPhoneNumber: false,
    flagOfReservDate: false,
  });

  const [checkPhoneNumberOfP, setCheckPhoneNumberofP] = useState(null);
  /* 名前を保存する変数とsetするための関数 */
  /* const [name, setName] = useState(""); */
  /* 名前が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  /*  const [nameError, setNameError] = useState("名前の入力は必須です");
   */
  /* 電話番号を保存するための変数 */
  /*  const [phoneNumber, setPhoneNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
  }); */
  /* 電話番号が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  /*const [phoneNumberError, setPhoneNumberError] =
    useState("電話番号の入力は必須です");
*/
  /* 予約日を保存する変数とsetするための関数 */
  /* const [reservDate, setReservDate] = useState(""); */
  /*現在時刻を保持するための変数*/
  /*   const [reservDateError, setReservDateError] =
    useState("予約日の入力は必須です");
 */
  const handleSubmit = (e) => {
    /*e.stopPropagation();*/
    e.preventDefault();
    console.log(flagOfForm);
    if (
      flagOfForm.flagOfName === true &&
      /*phoneNumber.number1.length !== 0 &&
      phoneNumber.number2.length !== 0 &&
      phoneNumber.number3.length !== 0 &&*/
      flagOfForm.flagOfPhoneNumber === true &&
      flagOfForm.flagOfReservDate === true
    ) {
      console.log("submit process ....");
    }
  };

  const checkKeyDown = (e) => {
    // e.targetがtextarea, button, anchorの場合はEnterを許可
    if (
      e.key === "Enter" &&
      (e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLAnchorElement)
    ) {
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const checkInputData = useCallback(
    () => {
      /* if (name.length === 0) {
      setNameError(() => {
        return "名前は必須項目です。";
      });
    } else {
      setNameError(() => {
        return "";
      });
    }
 */
      /*  if (
      phoneNumber.number1.length === 0 ||
      phoneNumber.number2.length === 0 ||
      phoneNumber.number3.length === 0
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "電話番号は必須項目です。";
      });
      return;
    } else {
      setPhoneNumberError(() => {
        console.log("Phone Number is True");
        return "";
      });
    } */
      /* 
    if (
      (phoneNumber.number1 === "03" || phoneNumber.number1 == "06") &&
      (phoneNumber.number2.length !== 4 || phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
      });
    }

    
    if (
      phoneNumber.number1.match(/^0[5-9]0/) &&
      (phoneNumber.number2.length !== 4 || phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
      });
    }
    
    if (
      (!phoneNumber.number1.match(/^0[5-9]0/) &&
        ((phoneNumber.number1.length === 3 &&
          phoneNumber.number2.length !== 3) ||
          (phoneNumber.number1.length === 4 &&
            phoneNumber.number2.length !== 2) ||
          (phoneNumber.number1.length === 5 &&
            phoneNumber.number2.length !== 1))) ||
      phoneNumber.number3.length !== 4
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
      });
    }
 */
      /* if (reservDate.length === 0) {
      setReservDateError(() => {
        return "予約日は必須項目です。";
      });
    } else {
      setReservDateError(() => {
        return "";
      });
    } */
    },
    [
      /*phoneNumber.number1,
    phoneNumber.number2,
    phoneNumber.number3,*/
      /*reservDate,*/
    ]
  );

  return (
    <div className={styles.inputform_container}>
      <h1>セミナー お申込みフォーム</h1>
      <form
        action="#"
        onSubmit={handleSubmit}
        className={styles.inputform}
        onKeyDown={checkKeyDown}
      >
        <FormOfName
          /*           name={name}
          setName={setName}
          nameError={nameError}
          setNameError={setNameError}
 */
          setFlagOfForm={setFlagOfForm}
        />
        <FormOfPhoneNumber
          /*phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          phoneNumberError={phoneNumberError}
          setPhoneNumberError={setPhoneNumberError}*/
          flagOfForm={flagOfForm}
          setFlagOfForm={setFlagOfForm}
          setCheckPhoneNumberofP={setCheckPhoneNumberofP}
        />

        <FormOfReservDate
          /*reservDate={reservDate}
          setReservDate={setReservDate}
          reservDateError={reservDateError}
          setReservDateError={setReservDateError}*/
          setFlagOfForm={setFlagOfForm}
        />
        <FormOfMeetingPlace />
        <div className={styles.submit_button_div}>
          <button type="submit" value="" onClick={checkPhoneNumberOfP}>
            上記の内容で申し込む
          </button>
        </div>
      </form>
    </div>
  );
};
