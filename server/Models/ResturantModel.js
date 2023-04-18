const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    OwnerName: String,
  });

const Restaurants = mongoose.model("Restaurants", restaurantSchema);
module.exports = Restaurants