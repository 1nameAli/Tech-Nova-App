import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { errorHandler, successHandler } from "../utils";
import "./BuyActionWindow.css"; // Reuse same styles
import {baseUrl} from '../baseUrl.js'
const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
  const qty = Number(stockQuantity);
  const price = Number(stockPrice);

  if (isNaN(qty) || qty <= 0) {
    errorHandler("Please enter a valid quantity");
    return;
  }

  if (isNaN(price) || price <= 0) {
    errorHandler("Please enter a valid price");
    return;
  }

  axios
    .post(`${baseUrl}/api/orders/newOrder`, {
      name: uid,
      qty,
      price,
      mode: "SELL",
    })
    .then((res) => {
      successHandler("Your sell order has been placed");
      closeSellWindow();
    })
    .catch((err) => {
      errorHandler("Issue generating sell order");
      console.error(err.response?.data || "Sell order failed");
    });
};

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin will be credited</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
