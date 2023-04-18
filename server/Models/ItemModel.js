const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    restaurantId: String,
    imgUrl: String,
  });
const AllItems = mongoose.model("AllMenuItems", itemSchema);
module.exports = AllItems