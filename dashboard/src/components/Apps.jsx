import React from "react";

const Apps = () => {
  return (
    <div style={{ maxWidth: 900, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Trading Overview</h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
        <img
          src="https://i.redd.it/vovtk5f5xin61.jpg"
          alt="Trading Icon"
          style={{ maxWidth: 200, borderRadius: 10, boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
        />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}>
        <thead>
          <tr style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
            <th style={{ padding: 12, border: "1px solid #ddd", textAlign: "left" }}>Category</th>
            <th style={{ padding: 12, border: "1px solid #ddd", textAlign: "left" }}>Name</th>
            <th style={{ padding: 12, border: "1px solid #ddd", textAlign: "left" }}>Description</th>
            <th style={{ padding: 12, border: "1px solid #ddd", textAlign: "left" }}>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: 12 }}>Tool</td>
            <td style={{ padding: 12 }}>TradingView</td>
            <td style={{ padding: 12 }}>Charting platform with advanced trading tools.</td>
            <td style={{ padding: 12 }}>
              <a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer">
                tradingview.com
              </a>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: 12 }}>Tool</td>
            <td style={{ padding: 12 }}>MetaTrader 4</td>
            <td style={{ padding: 12 }}>Popular forex trading platform.</td>
            <td style={{ padding: 12 }}>
              <a href="https://www.metatrader4.com" target="_blank" rel="noopener noreferrer">
                metatrader4.com
              </a>
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: 12 }}>Blog</td>
            <td style={{ padding: 12 }}>Investopedia Trading</td>
            <td style={{ padding: 12 }}>Educational articles about trading and finance.</td>
            <td style={{ padding: 12 }}>
              <a href="https://www.investopedia.com/trading/" target="_blank" rel="noopener noreferrer">
                investopedia.com
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: 12 }}>Blog</td>
            <td style={{ padding: 12 }}>BabyPips</td>
            <td style={{ padding: 12 }}>Forex trading education for beginners.</td>
            <td style={{ padding: 12 }}>
              <a href="https://www.babypips.com" target="_blank" rel="noopener noreferrer">
                babypips.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Apps;
