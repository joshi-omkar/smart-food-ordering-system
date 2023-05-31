const startupDebugger = require("debug")("app:startup");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const uploadImage = require("./uploadImage");

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://omkar:omkar@cluster0.g658zun.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection established to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const userSchema = new mongoose.Schema({
  name: String,
  mobileno: String,
});

const itemSchema = new mongoose.Schema({
  dishName: String,
  dishPrice: String,
  dishDescription: String,
  imageUrl: String,
  selectedOption: String,
  currentCategory: String,
});

const Orders = new mongoose.Schema({
  items: Array,
  tableId: String,
});

const prebookOrders = new mongoose.Schema({
  items: Array,
  userInfo: Object,
});

const User = mongoose.model("User", userSchema);
const AllItems = mongoose.model("AllMenuItems", itemSchema);
const AllOrders = mongoose.model("AllOrders", Orders);
const PrebookOrders = mongoose.model("PrebookOrders", prebookOrders);

app.use(express.json());
app.use(helmet()); 

app.use(morgan("tiny")); 
startupDebugger("Morgan enabled");

app.get("/", (req, res) => {
  res.send("Hello 11th Hour");
});

/************   User    ****************/

app.post("/customer_details", async (req, res) => {
  const user = new User({
    name: req.body.name,
    mobileno: req.body.mobileNo,
  });

  try {
    const result = await user.save();
  } catch (e) {
    console.log("Yaha error1!");
  }

  res.send("accepted");
});

// '/getMenu/:id'   GET
app.get("/getMenu/:id", async (req, res) => {
  const id = req.params.id;
  const menu_card = await AllItems.find({ restaurantId: id });
  res.send(menu_card);
});

// '/placeOrder'    POST
app.put("/placeOrder", async (req, res) => {
  const order = new AllOrders({
    items: req.body.items,
    tableId: req.body.tableId,
  });

  try {
    const result = await order.save();
  } catch (e) {
    for (field in e.errors)
      console.log("Yaha error1!! :-" + e.errors[field].message);
  }
  res.send("accepted");
});

app.put("/prebook", async (req, res) => {
  console.log(typeof req.body);
  const items = req.body.items;
  const userInfo = req.body.userInfo;

  const order = new PrebookOrders({
    items: items,
    userInfo: userInfo,
  });

  try {
    const result = await order.save();
  } catch (e) {
    for (field in e.errors)
      console.log("Yaha error1!! :-" + e.errors[field].message);
  }

  res.send("accepted");
});

/************   User-End    ****************/

/************   Owner    ****************/

// GetOrders
app.get("/getOrders", async (req, res) => {
  const saareKaam = await AllOrders.find({});
  res.send(saareKaam);
});

app.get("/getPrebookOrders", async (req, res) => {
  const saareKaam = await PrebookOrders.find({});
  res.send(saareKaam);
});

// delete Order
app.delete("/deleteOrder/:id", async (req, res) => {
  const id = req.params.id;

  let order = await AllOrders.deleteMany({ tableId: id });

  if (!order) {
    // Not existing, return 404
    res.status(404).send("The course with the given id was not found");
    return;
  }

  res.send(order);
});

app.delete("/deletePreorder/:id", async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedOrder = await PrebookOrders.findOneAndDelete({ 'userInfo.mobileNo': id });

    if (deletedOrder) {
      res.status(200).json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error: error.message });
  }
});

app.get("/getOrders/:id", async (req, res) => {
  const id = req.params.id;
  let order = await AllOrders.find({ tableId: id });

  if (!order) {
    res.status(404).send("The course with the given id was not found");
    return;
  }

  res.send(order);
});

app.get("/getPrebookOrders/:id", async (req, res) => {
  const id = req.body
  let order = await PrebookOrders.find({ 'userInfo.mobileNo': id });

  if (!order) {
    res.status(404).send("The course with the given id was not found");
    return;
  }

  res.send(order);
});

// Login
app.get("/login/:id", async (req, res) => {
  const id = req.params.id;

  let isFound = true;

  const restaus = await Restaurants.findById(id).catch((e) => {
    console.log(e.message);
    //res.status(404);
    isFound = false;
  });

  if (isFound) {
    console.log("User is there");
    res.send(restaus);
  } else {
    res.send({
      _id: -1,
    });
  }
});

// Add Item
app.post("/addItem", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const obj = req.body;

  const item = new AllItems(obj);

  try {
    const result = await item.save(); //Asynchronus operation, takes time
    console.log(result);
  } catch (e) {
    for (field in e.errors) console.log(e.errors[field].message);
  }

  res.send(obj);
  return;
});

app.get("/getItem", async (req, res) => {
  const id = req.params.id;

  const menu_card = await AllItems.find({});
  console.log(menu_card);

  res.send(menu_card);
});

/************   Owner-End    ****************/
app.use("/file", uploadImage);
const PORT = process.env.PORT || 3001;

app.listen(3001, () => console.log(`Listening on port ${PORT}..`));
