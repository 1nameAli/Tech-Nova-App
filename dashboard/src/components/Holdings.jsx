import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import {baseUrl} from '../baseUrl.js'
const Holdings = () => {
  const [holdingsData, setHoldingsData] = useState([]);
  const labels = holdingsData.map((stock) => stock.name);


  const data = {
    labels,
    datasets: [
      {
        label: "Holdings",
        data: holdingsData.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    axios.get(`${baseUrl}/api/holdings/allHoldings`).then((res) => {
      setHoldingsData(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({holdingsData.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdingsData.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const isProfit = currentValue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currentValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currentValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className="profit">1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
        <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
