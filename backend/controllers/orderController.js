import { Order } from "../models/order.model.js";
import { Holding } from "../models/holding.model.js";


const getRandomChange = () => (Math.random() * 5).toFixed(2);

export const newOrderController = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new Order({ name, qty, price, mode });
    await newOrder.save();

    let holding = await Holding.findOne({ name });

    const net = getRandomChange();
    const day = getRandomChange();
    const isLoss = Math.random() < 0.5;

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qty;
        const totalCost = holding.avg * holding.qty + price * qty;
        const newAvg = totalCost / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = price;
        holding.net = net;
        holding.day = day;
        holding.isLoss = isLoss;
        await holding.save();
      } else {
        const newHolding = new Holding({
          name,
          qty,
          avg: price,
          price,
          net,
          day,
          isLoss,
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (!holding) {
        return res.status(400).json({ error: "No holdings to sell" });
      }

      if (holding.qty < qty) {
        return res.status(400).json({ error: "Not enough quantity to sell" });
      }

      holding.qty -= qty;

      if (holding.qty === 0) {
        await Holding.deleteOne({ name });
      } else {
        holding.price = price;
        holding.net = net;
        holding.day = day;
        holding.isLoss = isLoss;
        await holding.save();
      }
    }

    res.status(201).json({ message: "Order and Holding updated successfully!" });
  } catch (err) {
    console.error("❌ Error saving order or holding:", err.message, err.stack);
    res.status(500).json({ error: err.message || "Failed to save order or update holding" });
  }
};

export const getOrderController = async (req, res) => {
  let allOrders = await Order.find({});
  console.log(allOrders);

  res.json(allOrders);
};
