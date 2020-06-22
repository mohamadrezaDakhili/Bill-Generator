import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";

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
        <div id="box-item"></div>
        <div id="box-calc">
          <div className="row p-0 m-0">
            <div className="col-6 bg-danger">dg</div>
            <div className="col-6">
              <div id="test" className="row">
                <div className="col-12 bg-dark">
                  <div class="row justify-content-between">
                    <span>820/900تومان</span>
                    <span>جمع کل سفارشات</span>
                  </div>
                </div>
                <div className="col-12 bg-warning">
                  <div class="row justify-content-between">
                    <span>20/500تومان</span>
                    <span>حق سرویس و کارمزد</span>
                  </div>
                </div>
                <div className="col-12 bg-primary">
                  <div class="row justify-content-between">
                    <span>34/000تومان</span>
                    <span>تخفیف</span>
                  </div>
                </div>
                <div className="col-12 bg-secondary">
                  <div class="row justify-content-center">
                    <span>894/450 تومان</span>
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
