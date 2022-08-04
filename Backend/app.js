const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://admin:XxOuDn0bqjyriH5z@cluster0.x0rv3.mongodb.net/mydatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected"))
  .then(() => {
    app.listen(1001);
  })
  .catch((err) => console.log(err));

// XxOuDn0bqjyriH5z
