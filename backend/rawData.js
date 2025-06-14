
// Route to add data of holdings
app.get("/holdingsData", async (req, res) => {
  const holdingsData = [
    {
      name: "SparkLab Creative",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "Intersys ltd",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "Cubix",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "PanaCloud",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ArbiSoft",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "10Pearls",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "Devsinc",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "Xeven Solutions",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "Hub360",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "Systems ltd",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "Meezan Bank",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "Habib Metro",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "Fauji Foundation",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  try {
    await Holding.insertMany(holdingsData);
    res.send("✅ Data uploaded to database successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to upload data");
  }
});

// Route to add data of positions
app.get("/positionsData", async (req, res) => {
  const positionData = [
    {
      product: "CNC",
      name: "SPARKLAB",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "INTERSYS",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    await Position.insertMany(positionData);
    res.send("✅ Data uploaded to database successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Failed to upload data");
  }
});


