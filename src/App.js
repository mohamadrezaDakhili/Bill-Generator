import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import plus from "./plus.svg";
import ItemFood from "./item-food";
const arr = [
  { name: "قیمه مکزیکی", price: "20000", id: 1 },
  { name: "قیمه مکزیکی", price: "30000", id: 2 },
  { name: "قیمه مکزیکی", price: "40000", id: 3 },
  { name: "قیمه مکزیکی", price: "55000", id: 4 },
  { name: "قیمه مکزیکی", price: "25000", id: 5 },
];
function App() {
  return (
    <div className="row justify-content-center p-0 m-0">
      <div id="box-bill">
        <div
          id="box-top"
          className="row justify-content-center align-items-center p-0 m-0"
        >
          رستوران مک‌دونالد شعبه کامرانیه
        </div>
        <div id="box-item">
          {arr.map((item) => {
            return <ItemFood price={item.price} name={item.name} />;
          })}
        </div>
        <div id="box-calc">
          <div className="row align-items-end h-100 p-0 m-0">
            <div className="col-6">
              <div class="row">
                <div className="col-12">
                  <div class="row justify-content-center position-relative p-3">
                    <input
                      id="discount-code"
                      type="text"
                      placeholder="کد تخفیف"
                    ></input>
                    <div id="btn-discount-code">
                      <div class="row h-100 justify-content-center ">
                        <img src={plus} alt="plus" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div class="row justify-content-center p-3 mb-2">
                    <button id="button">ثبت سفارش</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div id="lauout-calc" className="row">
                <div className="col-12">
                  <div class="row justify-content-between p-2">
                    <span>820/900تومان</span>
                    <span>جمع کل سفارشات</span>
                  </div>
                </div>
                <div className="col-12">
                  <div class="row justify-content-between p-2">
                    <span>20/500تومان</span>
                    <span>حق سرویس و کارمزد</span>
                  </div>
                </div>
                <div className="col-12">
                  <div class="row justify-content-between p-2">
                    <span>34/000تومان</span>
                    <span>تخفیف</span>
                  </div>
                </div>
                <div className="col-12">
                  <div class="row justify-content-center p-3 mb-2">
                    <span id="total-price">894/450 تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
