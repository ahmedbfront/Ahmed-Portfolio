const mongoose = require("mongoose");

const home = mongoose.Schema({
  name: { type: String },
  paragraph: { type: String },
  logo: { type: String },
});

module.exports = mongoose.model("Home", home);
