import React, { FC} from "react";
import "./OneEmployee.css";
import { TEmployees, deleteEmployees } from "features/getEmployees/getEmployees";
import { useAppDispatch } from "app/store";

const OneEmployee: FC<TEmployees> = ({
  id,
  name,
  surname,
  email,
  position,
  handleChange,
}) => {
    const dispatch = useAppDispatch()
  return (
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
            handleChange && handleChange()
          }}
        >
          Change
        </button>
        <button onClick={()=>{
            dispatch(deleteEmployees(id))
        }}>Delete</button>
      </div>
    </div>
  );
};

export default OneEmployee;
