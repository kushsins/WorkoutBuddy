import React from "react";
import "./InputRow.css";

const InputRow = ({ title, type, onChange, value }) => {
  return (
    <div className="inputRow">
      <h4>{title}</h4>
      <input className="input" type={type} onChange={onChange} value={value} />
    </div>
  );
};

export default InputRow;
