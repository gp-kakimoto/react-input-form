import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  /* 名前を保存する変数とsetするための関数 */
  const [name, setName] = useState("");
  /* 名前が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [nameError, setNameError] = useState("名前の入力は必須です");
  /* 電話番号を保存するための変数 */
  const [phoneNumber, setPhoneNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
  });
  /* 電話番号が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [phoneNumberError, setPhoneNumberError] =
    useState("電話番号の入力は必須です");

  /* 予約日を保存する変数とsetするための関数 */
  /*const [reservDate, setReservDate] = useState({ text: "", flag: false });*/
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
  const [selectedMeetingPlaceOption, setSelectedMeetingPlaceOption] =
    useState("online");

  const handleSelectedMeetingPlaceOptionChange = useCallback((e) => {
    setSelectedMeetingPlaceOption(() => {
      return e.target.value;
    });
  }, []);

  const handleNameChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }

    setName(() => {
      return e.target.value.trim();
    });
    setNameError(() => {
      return e.target.value.trim().length !== 0 ? "" : "名前の入力は必須です";
    });
  }, []);

  const handleSubmit = (e) => {
    /*e.stopPropagation();*/
    e.preventDefault();
    if (
      name.length !== 0 &&
      phoneNumber.number1.length !== 0 &&
      phoneNumber.number2.length !== 0 &&
      phoneNumber.number3.length !== 0 &&
      reservDate.length !== 0
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

  const handlePhoneNumber1 = useCallback(
    (e) => {
      if (e.target.value.trim().match(/[^0-9０-９]+/)) {
        /*alert("数字を入力してください");*/
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        return;
      }

      if (e.target.value.trim().length > 3) {
        setPhoneNumberError(() => {
          return "市外局番は2桁または3桁です";
        });
        return;
      }

      setPhoneNumber((old) => {
        return {
          ...old,
          number1: e.target.value.trim(),
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
      if (e.target.value.trim().match(/[^0-9０-９]+/)) {
        /*alert("数字を入力してください");*/
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        return;
      }

      if (e.target.value.trim().length > 4) {
        setPhoneNumberError(() => {
          return "市内局番は3桁または4桁です";
        });
        return;
      }
      /*
      setPhoneNumberError(() => {
        return "";
      });*/
      console.log("This is handlePhoneNumber2 process .... ");
      /*if (e.target.value.trim().length === 0) {*/
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
      if (e.target.value.trim().match(/[^0-9０-９]+/)) {
        /*alert("数字を入力してください");*/
        setPhoneNumberError(() => {
          return "数字を入力してください";
        });
        return;
      }

      if (e.target.value.trim().length > 4) {
        setPhoneNumberError(() => {
          return "加入者番号は4桁です";
        });
        return;
      }
      /*      setPhoneNumberError(() => {
        return "";
      });*/

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
      } else {
        setReservDate(() => {
          return e.target.value.trim();
        });
        setReservDateError(() => {
          return "";
        });
      }
    }
  }, []);

  const checkInputData = useCallback(() => {
    if (name.length === 0) {
      setNameError(() => {
        return "名前は必須項目です。";
      });
    } else {
      setNameError(() => {
        return "";
      });
    }
    if (
      phoneNumber.number1.length === 0 ||
      phoneNumber.number2.length === 0 ||
      phoneNumber.number3.length === 0
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "電話番号は必須項目です。";
      });
    } else {
      setPhoneNumberError(() => {
        console.log("Phone Number is True");
        return "";
      });
    }

    /* 東京03のチェック*/
    if (
      phoneNumber.number1 === "03" &&
      (phoneNumber.number2.length !== 4 || phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
      });
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
    }
    /*東京03以外の固定電話のチェック*/
    if (
      phoneNumber.number1.length === 3 &&
      (phoneNumber.number2.length !== 3 || phoneNumber.number3.length !== 4)
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        return "入力された電話番号は正しくありません";
      });
    }

    if (reservDate.length === 0) {
      setReservDateError(() => {
        return "予約日は必須項目です。";
      });
    } else {
      setReservDateError(() => {
        return "";
      });
    }
  }, [
    name,
    phoneNumber.number1,
    phoneNumber.number2,
    phoneNumber.number3,
    reservDate,
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.inputform_container}>
          <h1>セミナー お申込みフォーム</h1>
          <form
            action="#"
            onSubmit={handleSubmit}
            className={styles.inputform}
            onKeyDown={checkKeyDown}
          >
            <dl className={styles.inputform_dl}>
              <dt className={styles.inputform_dl_dt}>
                <label htmlFor="name">名前</label>
                <span>必須</span>
              </dt>
              <dd className={styles.inputform_dl_dd}>
                <input
                  className={styles.inputform_dl_dd_input}
                  type="text"
                  id="name"
                  name="your-name"
                  value={name}
                  onChange={handleNameChange}
                />
                <p className={styles.inputform_dl_dd_p}>{nameError}</p>
              </dd>

              <dt className={styles.inputform_dl_dt}>
                <label htmlFor="tel1">電話番号</label>
                <span>必須</span>
              </dt>
              <dd className={styles.inputform_dl_dd}>
                <input
                  type="text"
                  id="tel1"
                  name="your-tel1"
                  value={phoneNumber.number1}
                  onChange={handlePhoneNumber1}
                />{" "}
                -
                <input
                  type="text"
                  id="tel2"
                  name="your-tel2"
                  value={phoneNumber.number2}
                  onChange={handlePhoneNumber2}
                />{" "}
                -
                <input
                  type="text"
                  id="tel3"
                  name="your-tel3"
                  value={phoneNumber.number3}
                  onChange={handlePhoneNumber3}
                />
                <p className={styles.inputform_dl_dd_p}>{phoneNumberError}</p>
              </dd>

              <dt className={styles.inputform_dl_dt}>
                <label htmlFor="reservation">予約日</label>
                <span>必須</span>
              </dt>
              <dd className={styles.inputform_dl_dd}>
                <input
                  type="date"
                  id="reservation"
                  name="your-reservation"
                  min={today}
                  value={reservDate}
                  onChange={handleReservDate}
                />{" "}
                13時 ～ 14時
                <p className={styles.inform_dl_dd_p}>{reservDateError}</p>
              </dd>

              <dt className={styles.inputform_dl_dt}>
                受講形式<span>必須</span>
              </dt>
              <dd>
                <input
                  type="radio"
                  id="online"
                  name="your-lesson"
                  value="online"
                  onChange={handleSelectedMeetingPlaceOptionChange}
                  checked={selectedMeetingPlaceOption === "online"}
                />
                <label htmlFor="online">オンラインで受講</label>
                <br />
                <input
                  type="radio"
                  id="venue"
                  name="your-lesson"
                  value="venue"
                  onChange={handleSelectedMeetingPlaceOptionChange}
                  checked={selectedMeetingPlaceOption === "venue"}
                />
                <label htmlFor="venue">会場で受講</label>
                <p className={styles.inform_dl_dd_p}></p>
              </dd>
            </dl>

            {selectedMeetingPlaceOption === "online" ? (
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
            <div className={styles.submit_button_div}>
              <button
                id="submit-button"
                type="submit"
                value=""
                onClick={checkInputData}
              >
                上記の内容で申し込む
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
