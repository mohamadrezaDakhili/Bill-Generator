import React from "react";
import "./App.css";
import imgFood from "./img-food.png";

function ItemFood(props) {
  return (
    <div className="px-4 py-2">
      <div id="box-item-food" class="row align-items-end p-1 m-0">
        <div className="col-9">
          <div class="row">
            <div className="col-12 p-0 text-right name-food mb-1">
              {props.name}
            </div>
            <div className="col-12 text-right p-0 name-food mb-1">
              {props.price} تومان
            </div>
            <div className="col-12">
              <div class="row justify-content-between txt-price">
                <span>111/000 تومان</span>
                <span>3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="row justify-content-center">
            <img src={imgFood} alt="imageFood" width="100px" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ItemFood;
