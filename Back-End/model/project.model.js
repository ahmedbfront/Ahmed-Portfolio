const mongoose = require("mongoose");

const project = mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: String },
  image: { type: String, required: true },
  preview: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", project);
