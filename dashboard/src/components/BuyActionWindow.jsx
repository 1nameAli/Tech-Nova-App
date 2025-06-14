import { useState, useContext } from "react"; // <-- add useContext
import { Link } from "react-router-dom";
import axios from "axios";
import {baseUrl} from '../baseUrl.js'
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { errorHandler, successHandler } from "../utils";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext); // ✅ Use context correctly

  const handleBuyClick = () => {
    axios
      .post(`${baseUrl}/api/orders/newOrder `, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      })
      .then((res) => {
        console.log(res.data.message);
        successHandler("Your order has been placed"); // ✅ Log success
        closeBuyWindow(); // ✅ Close only after success
      })
      .catch((err) => {
        errorHandler("Issue generating order");
        console.error(err.response?.data || "Order failed"); // ✅ Handle errors properly
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ Works here too
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
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
