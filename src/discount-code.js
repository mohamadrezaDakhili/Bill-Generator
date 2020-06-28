import React from "react";
import plus from "./plus.svg";
import remove from "./ic-delete.svg";

function Discount(props) {
  const [inputVal, setInputVal] = React.useState();
  const discount = [
    { name: "mohamad", amount: 10000 },
    { name: "reza", amount: 20000 },
    { name: "mohamadreza", amount: 30000 },
  ];

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  function buttonDiscount() {
    let obj = discount.find((o) => o.name === inputVal);
    if (obj === undefined) {
      document.getElementById("discount-code").style.background = "#FBDFDC";
    } else {
      document.getElementById("ic-discount").src = remove;
      document.getElementById("btn-discount-code").style.backgroundColor =
        "#E74C3C";
      document.getElementById("discount-code").style.background = "#D9F6E6";
      props.setAmount(obj.amount);
    }
  }

  if (inputVal === "") {
    document.getElementById("btn-discount-code").style.backgroundColor =
      "#f39c12";
    document.getElementById("discount-code").style.background = "#ffffff";
    document.getElementById("ic-discount").src = plus;
  }

  return (
    <div className="col-12">
      <div className="row justify-content-center position-relative p-3">
        <input
          id="discount-code"
          type="text"
          placeholder="کد تخفیف"
          onChange={handleChange}
        ></input>
        <div id="btn-discount-code">
          <div
            className="row h-100 justify-content-center"
            onClick={buttonDiscount}
          >
            <img id="ic-discount" src={plus} alt="plus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
