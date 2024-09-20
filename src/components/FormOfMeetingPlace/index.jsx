import styles from "./FormOfMeetingPlace.module.css";
import { useCallback, useState } from "react";
import { FormContainer } from "../FormContainer";

export const FormOfMeetingPlace = () => {
  const [selectedMeetingPlaceOption, setSelectedMeetingPlaceOption] =
    useState("online");

  const handleSelectedMeetingPlaceOptionChange = useCallback((e) => {
    setSelectedMeetingPlaceOption(() => {
      return e.target.value;
    });
  }, []);

  const properties = {
    htmlFor: "online",
    label: "会場",
    required: "必須",
    type: "radio",
    online: "online",
    venue: "venue",
  };

  const input = () => {
    return (
      <div>
        <input
          type={properties.type}
          value={properties.online}
          id={properties.online}
          onChange={handleSelectedMeetingPlaceOptionChange}
          checked={selectedMeetingPlaceOption === properties.online}
        />
        <label htmlFor={properties.online}>オンラインで受講</label>
        <br />
        <input
          type={properties.type}
          value={properties.venue}
          onChange={handleSelectedMeetingPlaceOptionChange}
          checked={selectedMeetingPlaceOption === properties.venue}
        />
        <label htmlFor={properties.venue}>会場で受講</label>
      </div>
    );
  };

  return (
    <div>
      <FormContainer properties={properties} input={input()} errorMessage="" />
      {selectedMeetingPlaceOption === properties.online ? (
        <div>
          <p className={styles.information}>
            当日はオンライン会議システムを使用いたします。
            <br />
            ご受講にあたり、端末とネットワーク環境が必要になりますのでご準備をお願いいたします。
            <br />
            参加方法については、前日までに別途ご案内を差し上げます。
          </p>
        </div>
      ) : (
        <div>
          <p className={styles.information}>
            【会場情報】
            <br />
            会場：代々木GIプラザ3F Room1
            <br />
            住所：〒151-0053　東京都渋谷区代々木1-1-1
            <br />
            電話番号：00-0000-0000
          </p>
        </div>
      )}
    </div>
  );
};
