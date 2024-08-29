import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useCallback, useState } from "react";

export default function Home() {
  /* 名前を保存する変数とsetするための関数 */
  const [name, setName] = useState({ text: "", flag: false });
  /* 名前が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [nameError, setNameError] = useState("");
  /* 電話番号を保存するための変数 */
  const [phoneNumber, setPhoneNumber] = useState({
    number1: { text: "", flag: false },
    number2: { text: "", flag: false },
    number3: { text: "", flag: false },
  });
  /*const [phoneNumber1, setPhoneNumber1] = useState({ text: "", flag: false });*/
  /*const [phoneNumber2, setPhoneNumber2] = useState({ text: "", flag: false });*/
  /*  const [phoneNumber3, setPhoneNumber3] = useState({ text: "", flag: false });*/
  /* 電話番号が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [phoneNumberError, setPhoneNumberError] = useState("");

  /* 予約日を保存する変数とsetするための関数 */
  const [reservDate, setReservDate] = useState({ text: "", flag: false });
  /*現在時刻を保持するための変数*/
  const [reservDateError, setReservDateError] = useState("");

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
    if (e.target.value.trim().length === 0) {
      setName(() => {
        return { text: e.target.value.trim(), flag: false };
      });
    } else {
      setName(() => {
        return { text: e.target.value.trim(), flag: true };
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.flag &&
      phoneNumber.number1.flag &&
      phoneNumber.number2.flag &&
      phoneNumber.number3.flag &&
      reservDate.flag
    ) {
      console.log("submit process ....");
    }
  };

  const handlePhoneNumber1 = useCallback((e) => {
    if (e.target.value.trim().match(/[^0-9０-９]+/)) {
      alert("数字を入力してください");
      return;
    }
    /*if (e.target.value.trim().length === 0) {*/
    setPhoneNumber((old) => {
      return {
        ...old,
        number1: {
          text: e.target.value.trim(),
          flag: !(e.target.value.trim().length === 0),
        },
      };
      /*
        return e.target.value.trim().length === 0
          ? {
              number1: { text: e.target.value.trim(), flag: false },

              number2: {
                text: phoneNumber.number2.text,
                flag: phoneNumber.number2.flag,
              },
              number3: {
                text: phoneNumber.number3.text,
                flag: phoneNumber.number3.flag,
              },
            }
          : {
              number1: { text: e.target.value.trim(), flag: true },

              number2: {
                text: phoneNumber.number2.text,
                flag: phoneNumber.number2.flag,
              },
              number3: {
                text: phoneNumber.number3.text,
                flag: phoneNumber.number3.flag,
              },
            };*/
    });
  }, []);

  /* 
  const handlePhoneNumber1 = useCallback((e) => {
    
    if (e.target.value.trim().match(/[^0-9０-９]+/)) {
      alert("数字を入力してください");
      return;
    }
    if (e.target.value.trim().length === 0) {
      setPhoneNumber1(() => {
        return { text: e.target.value.trim(), flag: false };
      });
    } else {
      setPhoneNumber1(() => {
        return { text: e.target.value.trim(), flag: true };
      });
    }
  }, []);
*/
  /*
  const handlePhoneNumber2 = useCallback((e) => {
    if (e.target.value.trim().match(/[^0-9０-９]+/)) {
      alert("数字を入力してください");
      return;
    }
    if (e.target.value.trim().length === 0) {
      setPhoneNumber2(() => {
        return { text: e.target.value.trim(), flag: false };
      });
    } else {
      setPhoneNumber2(() => {
        return { text: e.target.value.trim(), flag: true };
      });
    }
  }, []);
*/

  const handlePhoneNumber2 = useCallback((e) => {
    if (e.target.value.trim().match(/[^0-9０-９]+/)) {
      alert("数字を入力してください");
      return;
    }
    console.log("This is handlePhoneNumber2 process .... ");
    /*if (e.target.value.trim().length === 0) {*/
    setPhoneNumber((old) => {
      console.log("This is setPhoneNumber of handlePhoneNumber2 preocess...");
      return {
        ...old,
        number2: {
          text: e.target.value.trim(),
          flag: !(e.target.value.trim().length === 0),
        },
      };
      /*return e.target.value.trim().length === 0
          ? {
              number1: {
                text: phoneNumber.number1.text,
                flag: phoneNumber.number1.flag,
              },

              number2: { text: e.target.value.trim(), flag: false },

              number3: {
                text: phoneNumber.number3.text,
                flag: phoneNumber.number3.flag,
              },
            }
          : {
              number1: {
                text: phoneNumber.number1.text,
                flag: phoneNumber.number1.flag,
              },

              number2: { text: e.target.value, flag: true },

              number3: {
                text: phoneNumber.number3.text,
                flag: phoneNumber.number3.flag,
              },
            };*/
    });
  }, []);

  const handlePhoneNumber3 = useCallback((e) => {
    if (e.target.value.trim().match(/[^0-9０-９]+/)) {
      alert("数字を入力してください");
      return;
    }
    console.log("This is handlePhoneNumber3 process .... ");
    /*if (e.target.value.trim().length === 0) {*/
    setPhoneNumber((old) => {
      console.log("This is setPhoneNumber of handlePhoneNumber3 preocess...");
      return {
        ...old,
        number3: {
          text: e.target.value.trim(),
          flag: !(e.target.value.trim().length === 0),
        },
      };

      /*return e.target.value.trim().length === 0
        ? {
            number1: {
              text: old.number1.text,
              flag: old.number1.flag,
            },
            number2: {
              text: old.number2.text,
              flag: old.number2.flag,
            },
            number3: { text: e.target.value.trim(), flag: false },
          }
        : {
            number1: {
              text: old.number1.text,
              flag: old.number1.flag,
            },

            number2: {
              text: old.number2.text,
              flag: old.number2.flag,
            },
            number3: { text: e.target.value, flag: true },
          };*/
      /*return {
        number1: {
          text: old.number1.text,
          flag: old.number1.flag,
        },

        number2: {
          text: old.number2.text,
          flag: old.number2.flag,
        },
        number3: { text: e.target.value, flag: true },
      };*/
    });
  }, []);

  /*
  const handlePhoneNumber3 = useCallback((e) => {
    if (e.target.value.trim().match(/[^0-9０-９]+/)) {
      alert("数字を入力してください");
      return;
    }
    if (e.target.value.trim().length === 0) {
      setPhoneNumber3(() => {
        return { text: e.target.value.trim(), flag: false };
      });
    } else {
      setPhoneNumber3(() => {
        return { text: e.target.value.trim(), flag: true };
      });
    }
  }, []);
*/
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
        return { text: "", flag: false };
      });
    } else {
      /*日付が過去のものでないかチェックする*/
      if (today > targetDate) {
        setReservDate(() => {
          return { text: "", flag: false };
        });
      } else {
        setReservDate(() => {
          return { text: e.target.value.trim(), flag: true };
        });
      }
    }
  }, []);

  const checkInputData = useCallback(() => {
    if (name.flag === false) {
      setNameError(() => {
        return "名前は必須項目です。";
      });
    } else {
      setNameError(() => {
        return "";
      });
    }
    if (
      phoneNumber.number1.flag === false ||
      phoneNumber.number2.flag === false ||
      phoneNumber.number3.flag === false
    ) {
      setPhoneNumberError(() => {
        console.log("Phone Number is false");
        console.log(`number1.flag=${phoneNumber.number1.flag}`);
        console.log(`number1.text=${phoneNumber.number1.text}`);
        console.log(`number2.flag=${phoneNumber.number2.flag}`);
        console.log(`number2.text=${phoneNumber.number2.text}`);
        console.log(`number3.flag=${phoneNumber.number3.flag}`);
        console.log(`number3.text=${phoneNumber.number3.text}`);
        return "電話番号は必須項目です。";
      });
    } else {
      setPhoneNumberError(() => {
        console.log("Phone Number is True");
        return "";
      });
    }

    if (reservDate.flag === false) {
      setReservDateError(() => {
        return "予約日は必須項目です。";
      });
    } else {
      setReservDateError(() => {
        return "";
      });
    }
  }, [
    name.flag,
    phoneNumber.number1.flag,
    phoneNumber.number2.flag,
    phoneNumber.number3.flag,
    reservDate.flag,
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>セミナー お申込みフォーム</h1>
          <form action="#" onSubmit={handleSubmit}>
            <dl>
              <dt>
                <label htmlFor="name">名前</label>
                <span>必須</span>
              </dt>
              <dd>
                <input
                  type="text"
                  id="name"
                  name="your-name"
                  value={name.text}
                  onChange={handleNameChange}
                />
                <p id="name-error">{nameError}</p>
              </dd>

              <dt>
                <label htmlFor="tel1">電話番号</label>
                <span>必須</span>
              </dt>
              <dd>
                <input
                  type="text"
                  id="tel1"
                  name="your-tel1"
                  value={phoneNumber.number1.text}
                  onChange={handlePhoneNumber1}
                />{" "}
                -
                <input
                  type="text"
                  id="tel2"
                  name="your-tel2"
                  value={phoneNumber.number2.text}
                  onChange={handlePhoneNumber2}
                />{" "}
                -
                <input
                  type="text"
                  id="tel3"
                  name="your-tel3"
                  value={phoneNumber.number3.text}
                  onChange={handlePhoneNumber3}
                />
                <p id="tel-error">{phoneNumberError}</p>
              </dd>

              <dt>
                <label htmlFor="reservation">予約日</label>
                <span>必須</span>
              </dt>
              <dd>
                <input
                  type="date"
                  id="reservation"
                  name="your-reservation"
                  value={reservDate.text}
                  onChange={handleReservDate}
                />{" "}
                13時 ～ 14時
                <p id="reservation-error">{reservDateError}</p>
              </dd>

              <dt>
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
                <p id="lesson-error"></p>
              </dd>
            </dl>

            {selectedMeetingPlaceOption === "online" ? (
              <div>
                <p>
                  当日はオンライン会議システムを使用いたします。
                  <br />
                  ご受講にあたり、端末とネットワーク環境が必要になりますのでご準備をお願いいたします。
                  <br />
                  参加方法については、前日までに別途ご案内を差し上げます。
                </p>
              </div>
            ) : (
              <div>
                <p>
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
            <div>
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
