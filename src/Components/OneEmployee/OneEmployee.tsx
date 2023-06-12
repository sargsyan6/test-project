import React, { FC, useState } from "react";
import "./OneEmployee.css";
import {
  TEmployees,
  deleteEmployees,
} from "features/getEmployees/getEmployees";
import ChangeInputs from "Components/ChangeInputs";
import { useAppDispatch } from "app/store";

const OneEmployee: FC<TEmployees> = ({
  id,
  name,
  surname,
  email,
  position,
  
}) => {
  const [changeMode, setChangeMode] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    setChangeMode(!changeMode);
  };
  return (
    <>
      {!changeMode ? (
        <div className="oneEmployee">
          <div>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{email}</div>
            <div>{position}</div>
          </div>
          <div>
            <button
              onClick={() => {
                handleChange && handleChange();
              }}
            >
              Change
            </button>
            <button
              onClick={() => {
                dispatch(deleteEmployees(id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <ChangeInputs />
      )}
    </>
  );
};

export default OneEmployee;
