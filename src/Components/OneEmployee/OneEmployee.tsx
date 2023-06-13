import React, { FC, useState } from "react";
import "./OneEmployee.css";
import {
  TEmployees,
  deleteEmployees,
  filterEmployees,
} from "features/getEmployees/getEmployees";
import ChangeInputs from "Components/ChangeInputs";
import { useAppDispatch } from "app/store";
import { useNavigate } from "react-router-dom";

//type THandleChange = ()=>void

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
    setChangeMode(()=>!changeMode);
  };

  const navigate = useNavigate()
  return (
    <>
      {!changeMode ? (
        <div className="oneEmployee">
          <div>
            <div onClick={()=>navigate(`/employees/${id}`)}>{name}</div>
            <div>{surname}</div>
            <div>{email}</div>
            <div>{position}</div>
          </div>
          <div>
            <button className="change"
              onClick={() => {
                handleChange && handleChange();
              }}
            >
              Change
            </button>
            <button className="delete"
              onClick={() => {
                dispatch(filterEmployees(id))
                dispatch(deleteEmployees(id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <ChangeInputs handleChange={handleChange} id={id} />
      )}
    </>
  );
};

export default OneEmployee;
