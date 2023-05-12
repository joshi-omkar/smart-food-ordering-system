const startupDebugger = require("debug")("app:startup");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const app = express();
const uploadImage = require('./uploadImage')

app.use(cors())

mongoose
  .connect(
    "mongodb+srv://omkar:omkar@cluster0.g658zun.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection established to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const restaurantSchema = new mongoose.Schema({
  name: String,
  OwnerName: String,
});

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
  currentCategory: String
});

const Orders = new mongoose.Schema({
  items: Array,
  tableId: String,
});

const prebookOrders = new mongoose.Schema({
  items: String,
  userInfo: String
});

const Restaurants = mongoose.model("Restaurants", restaurantSchema);
const User = mongoose.model("User", userSchema);
const AllItems = mongoose.model("AllMenuItems", itemSchema);
const AllOrders = mongoose.model("AllOrders", Orders);
const PrebookOrders = mongoose.model("PrebookOrders", prebookOrders);

app.use(express.json());
app.use(helmet()); //secures the page by adding various http headers

app.use(morgan("tiny")); // loggs every request in the console
startupDebugger("Morgan enabled");

app.get("/", (req, res) => {
  res.send("Hello 11th Hour");
});

/************   User    ****************/

app.post("/customer_details", async (req, res) => {
    console.log(JSON.stringify(req.body));
  const user = new User({
    name: req.body.name,
    mobileno: req.body.mobileNo,
  });

  try {
    const result = await user.save();
    console.log(result);
  } catch (e) {
    console.log("Yaha error1!");
  }

  res.send("accepted");
});

// '/getMenu/:id'   GET
app.get("/getMenu/:id", async (req, res) => {
  const id = req.params.id;

  const menu_card = await AllItems.find({ restaurantId: id });
  console.log(menu_card);

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
    console.log(result);
  } catch (e) {
    for (field in e.errors)
      console.log("Yaha error1!! :-" + e.errors[field].message);
  }

  res.send("accepted");
});

app.post("/prebook", async (req, res) => {
  console.log("prebook",JSON.stringify(req.body));

  const items = JSON.stringify(req.body.items)
  const userInfo = JSON.stringify(req.body.userInfo)

  const order = new PrebookOrders({
    items: items,
    userInfo: userInfo
  });

  try {
    const result = await order.save();
    console.log(result);
  } catch (e) {
    for (field in e.errors)
      console.log("Yaha error1!! :-" + e.errors[field].message);
  }

  res.send("accepted");
});

// app.get('/getQrCodeData/:uri', async (req, res) => {

//     let data = req.body.uri;
//     console.log(qr.decode(req.body.uri));

//     res.send(data);
// });

/************   User-End    ****************/

/************   Owner    ****************/

// GetOrders
app.get("/getOrders", async (req, res) => {
  const id = req.params.id;

  const saareKaam = await AllOrders.find({ });
  console.log(saareKaam);

  res.send(saareKaam);
});

app.get("/getPrebookOrders", async (req, res) => {
  const id = req.params.id;

  const saareKaam = await PrebookOrders.find({ });
  console.log(saareKaam);

  res.send(saareKaam);
});

// delete Order
app.delete("/deleteOrder/:id", async (req, res) => {
  const id = req.params.id;

  let order = await AllOrders.findByIdAndDelete(id);

  if (!order) {
    // Not existing, return 404
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

  // if(!restaus) {       // 404 Not found
  //     res.status(404);//.send('The Restaurant with the given id was not found');
  // } else {
  //     console.log("User is there");
  //     res.send(restaus);
  // }
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
    //console.log(e.message);
    for (field in e.errors) console.log(e.errors[field].message);
  }

  res.send(obj);
  return;
});

app.get("/getItem", async (req, res) => {
  const id = req.params.id;

  const menu_card = await AllItems.find({ });
  console.log(menu_card);

  res.send(menu_card);
});

/************   Owner-End    ****************/
app.use("/file", uploadImage);
const PORT = process.env.PORT || 3001;

app.listen(3001, () => console.log(`Listening on port ${PORT}..`));
