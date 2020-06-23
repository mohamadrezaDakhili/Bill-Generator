import React, { useState } from "react";
import "./App.css";

function TotalPrice(props) {
  console.log(props.price);
  let totalPrice = props.price * props.inputVal;

  return <div className="col-6">{totalPrice} تومان</div>;
}

export default TotalPrice;
