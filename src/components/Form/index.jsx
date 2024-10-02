import styles from "./Form.module.css";
import { useState } from "react";
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
  const handleSubmit = (e) => {
    /*e.stopPropagation();*/
    e.preventDefault();
    if (
      flagOfForm.flagOfName === true &&
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

  return (
    <div className={styles.inputform_container}>
      <h1>セミナー お申込みフォーム</h1>
      <form
        action="#"
        onSubmit={handleSubmit}
        className={styles.inputform}
        onKeyDown={checkKeyDown}
      >
        <FormOfName setFlagOfForm={setFlagOfForm} />
        <FormOfPhoneNumber
          flagOfForm={flagOfForm}
          setFlagOfForm={setFlagOfForm}
          setCheckPhoneNumberofP={setCheckPhoneNumberofP}
        />

        <FormOfReservDate setFlagOfForm={setFlagOfForm} />
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
