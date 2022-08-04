const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    reequired: true,
  },
  author: {
    type: String,
    reequired: true,
  },
  description: {
    type: String,
    reequired: true,
  },
  price: {
    type: Number,
    reequired: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
