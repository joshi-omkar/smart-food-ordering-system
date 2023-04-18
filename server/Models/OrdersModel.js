const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
    restaurantId: String,
    tableNo: Number,
    items: String,
    totalAmount: Number,
  });

const AllOrders = mongoose.model("AllOrders", Orders);
module.exports = AllOrders