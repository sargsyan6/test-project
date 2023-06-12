import React from "react";

const ChangeInputs = () => {
  return (
    <>
      <div className="oneEmployee">
        <div>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <input type="text" placeholder="surname" />
        </div>
        <div>
          <input type="text" placeholder="email" />
        </div>
      </div>
      <button>Save</button>
    </>
  );
};

export default ChangeInputs;
