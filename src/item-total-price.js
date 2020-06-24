import React from "react";
import "./App.css";

function ItemTotalPrice(props) {
  function minus() {
    props.setArr(
      props.arr.map((item) =>
        item.id === props.id
          ? { ...item, order: props.order === 0 ? 0 : props.order - 1 }
          : item
      )
    );
  }

  function plus() {
    props.setArr(
      props.arr.map((item) =>
        item.id === props.id
          ? { ...item, order: props.order >= 10 ? 10 : props.order + 1 }
          : item
      )
    );
  }

  return (
    <div className="col-12">
      <div className="row justify-content-between txt-price">
        <div className="col-6">12000 تومان</div>
        <div className="col-6">
          <div className="row justify-content-end align-items-center">
            <div className="minus text-center" onClick={minus}>
              -
            </div>
            <input
              className="count"
              type="number"
              readOnly={true}
              value={props.order}
            ></input>
            <span className="plus text-center" onClick={plus}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemTotalPrice;
