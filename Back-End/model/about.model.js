const mongoose = require("mongoose");

const about = mongoose.Schema({
  title: { type: String },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  experience: { type: Number },
  cv: { type: String },
  image: { type: String },
  paragraph: { type: String },
  skills: { type: Object },

});

module.exports = mongoose.model("About", about);
