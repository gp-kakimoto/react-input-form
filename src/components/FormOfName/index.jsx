import { useCallback, useEffect, useState } from "react";
import { InputField } from "../InputField";

export const FormOfName = (props) => {
  /* 名前を保存する変数とsetするための関数 */
  const [name, setName] = useState("");
  /* 名前が入力されていないときのエラメッセージを保存するための変数とsetの関数*/
  const [nameError, setNameError] = useState("");

  const checkName = () => {
    setNameError(() => {
      return name.length === 0 ? "名前の入力は必須です。" : "";
    });

    props.setFlagOfForm((old) => {
      return name.length === 0
        ? { ...old, flagOfName: false }
        : { ...old, flagOfName: true };
    });
  };

  useEffect(() => {
    props.setCheckNameOfP(() => {
      return checkName;
    });
  }, [name]);

  const handleNameChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }

    setName(() => {
      return e.target.value;
    });

    setNameError(() => {
      return e.target.value.trim().length === 0 ? "名前の入力は必須です。" : "";
    });

    props.setFlagOfForm((old) => {
      return e.target.value.trim().length === 0
        ? { ...old, flagOfName: false }
        : { ...old, flagOfName: true };
    });
  }, []);

  const properties = {
    htmlFor: "name",
    name: "name",
    label: "名前",
    required: true,
  };

  return (
    <InputField
      label={properties.label}
      id={properties.htmlFor}
      required={properties.required}
      errorMessage={nameError}
    >
      <input
        type="text"
        value={name}
        id={properties.htmlFor}
        name={properties.name}
        onChange={handleNameChange}
      />
    </InputField>
  );
};
