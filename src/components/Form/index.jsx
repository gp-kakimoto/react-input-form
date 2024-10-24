import styles from "./Form.module.css";
import { useState } from "react";
import { FormOfName } from "../FormOfName";
import { FormOfPhoneNumber } from "../FormOfPhoneNumber";
import { FormOfReserveDate } from "../FormOfReserveDate";
import { FormOfMeetingPlace } from "../FormOfMeetingPlace";
export const Form = () => {
  const [flagOfForm, setFlagOfForm] = useState({
    flagOfName: false,
    flagOfPhoneNumber: false,
    flagOfReserveDate: false,
  });

  const [checkPhoneNumberOfP, setCheckPhoneNumberofP] = useState(null);
  const [checkNameOfP, setCheckNameOfP] = useState(null);
  const [checkReserveDateOfP, setCheckReserveDateOfP] = useState(null);
  const checkFunction = () => {
    checkPhoneNumberOfP();
    checkNameOfP();
    checkReserveDateOfP();
  };
  const handleSubmit = (e) => {
    /*e.stopPropagation();*/

    e.preventDefault();
    if (
      flagOfForm.flagOfName === true &&
      flagOfForm.flagOfPhoneNumber === true &&
      flagOfForm.flagOfReserveDate === true
    ) {
      console.log("submit process ....");
    }
  };

  const checkKeyDown = (e) => {
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
          setFlagOfForm={setFlagOfForm}
          setCheckNameOfP={setCheckNameOfP}
        />
        <FormOfPhoneNumber
          setFlagOfForm={setFlagOfForm}
          setCheckPhoneNumberofP={setCheckPhoneNumberofP}
        />

        <FormOfReserveDate
          flagOfForm={flagOfForm}
          setFlagOfForm={setFlagOfForm}
          setCheckReserveDateOfP={setCheckReserveDateOfP}
        />
        <FormOfMeetingPlace />

        <div className={styles.submit_button_div}>
          <button type="submit" value="" onClick={checkFunction}>
            上記の内容で申し込む
          </button>

          {/* <input
            type="button"
            name="submitButton"
            onClick={(e) => {
              checkFunction();
              handleSubmit(e);
            }}
            value="上記の内容で申し込む"
          /> */}
        </div>
      </form>
    </div>
  );
};
