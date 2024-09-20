import { useCallback, useState } from "react";
import { FormContainer } from "../FormContainer";

export const FormOfName = (props) => {
  /* 名前を保存する変数とsetするための関数 */
  const [name, setName] = useState("");
  /* 名前が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [nameError, setNameError] = useState("名前の入力は必須です");
  const handleNameChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }

    setName(() => {
      return e.target.value;
    });

    if (e.target.value.trim().length === 0) {
      setNameError(() => {
        return "名前の入力は必須です。";
      });
      props.setFlagOfForm((old) => {
        return { ...old, flagOfName: false };
      });
    } else {
      setNameError(() => {
        return "";
      });
      props.setFlagOfForm((old) => {
        return { ...old, flagOfName: true };
      });
    }
  }, []);

  const properties = {
    htmlFor: "name",
    label: "名前",
    required: "必須",
  };

  const input = () => {
    return (
      <input
        type="text"
        value={name}
        id={properties.htmlFor}
        onChange={handleNameChange}
      />
    );
  };

  return (
    <FormContainer
      properties={properties}
      input={input()}
      errorMessage={nameError}
    />
  );
};
