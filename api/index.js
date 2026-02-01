const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", require("./routes/products"));
app.use("/cart", require("./routes/cart"));
app.use("/orders", require("./routes/orders"));

app.listen(5000, () => {
  console.log("API running on http://localhost:5000");
});
