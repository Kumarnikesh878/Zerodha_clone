import React from "react";

function Awards() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p mb-5>
            2+ million Zerodha clients contribute to over 15% ao alll ratail
            order volumes in India daily by trading and inversting in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>urrency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/pressLogos.png" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
