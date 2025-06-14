import React, { useEffect, useState } from "react";
import axios from "axios";
import {baseUrl} from '../baseUrl.js'

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/orders/getOrder`)
      .then((res) => setOrdersData(res.data))
      .catch((err) => console.error("Failed to fetch orders", err));
  }, []);

  return (
    <div >
      <h4 className="mb-4">Orders ({ordersData.length})</h4>
      
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>

                  <td>₹{stock.price.toFixed(2)}</td>

                    <td>{stock.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Orders;
