import React, { useState } from "react";
import "./App.css";

function Count() {
  const [value, setValue] = useState(0);
  function plus() {
    setValue(value + 1);
    if (value >= 10) {
      setValue(10);
    }
  }

  function minus() {
    setValue(value - 1);
    if (value == 0) {
      setValue(0);
    }
  }

  return (
    <div className="col-6">
      <div className="row justify-content-end align-items-center">
        <div className="minus text-center" onClick={minus}>
          -
        </div>
        <input className="count" type="number" value={value.toString()}></input>
        <span className="plus text-center" onClick={plus}>
          +
        </span>
      </div>
    </div>
  );
}

export default Count;
