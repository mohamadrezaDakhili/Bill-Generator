import React from "react";
import "./App.css";
import imgFood from "./img-food.png";
import ItemTotalPrice from "./item-total-price";

function ItemFood(props) {
  return (
    <div className="px-4 py-2">
      <div id="box-item-food" className="row align-items-end p-1 m-0">
        <div className="col-9">
          <div className="row">
            <div className="col-12 p-0 text-right name-food mb-1">
              {props.name}
            </div>
            <div className="col-12 text-right p-0 name-food mb-1">
              {props.price}
            </div>
            <ItemTotalPrice {...props} />
          </div>
        </div>

        <div className="col-3">
          <div className="row justify-content-center">
            <img src={imgFood} alt="imageFood" width="100px" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ItemFood;
