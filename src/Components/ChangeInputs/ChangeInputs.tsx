import { useAppDispatch } from "app/store";
import {
  changeEmployess,
  editEmployees,
} from "features/getEmployees/getEmployees";
import React, { FC, useState } from "react";

type TArg = {
  handleChange: () => void;
  id: number | string;
};

const ChangeInputs: FC<TArg> = ({ id, handleChange }) => {
  const [changeName, setChangeName] = useState("");
  const [changeSurName, setChangeSurName] = useState("");
  const [changeEmail, setChangeEmail] = useState("");

  type TObj = {
    name: string;
    surname: string;
    email: string;
  };

  const obj: TObj = {
    name: changeName,
    surname: changeSurName,
    email: changeEmail,
  };

  const dispatch = useAppDispatch();
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChangeName(e.target.value);
  const handleChangeSurName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChangeSurName(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChangeEmail(e.target.value);
  const handleSave = async () => {
    await dispatch(
      editEmployees({
        id: id,
        name: changeName,
        surname: changeSurName,
        email: changeEmail,
      })
    );
    await dispatch(
      changeEmployess({
        id: id,
        name: changeName,
        surname: changeSurName,
        email: changeEmail,
      })
    );
    await handleChange();
  };
  return (
    <>
      <div className="oneEmployee">
        <div>
          <input
            value={changeName}
            onChange={handleChangeName}
            type="text"
            placeholder="name"
          />
        </div>
        <div>
          <input
            value={changeSurName}
            onChange={handleChangeSurName}
            type="text"
            placeholder="surname"
          />
        </div>
        <div>
          <input
            value={changeEmail}
            onChange={handleChangeEmail}
            type="text"
            placeholder="email"
          />
        </div>
      </div>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default ChangeInputs;
