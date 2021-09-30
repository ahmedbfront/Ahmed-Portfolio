const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const upload = require("./helpers/multer");
const dotenv = require("dotenv").config();

// Router
const home = require("./router/home.route");
const about = require("./router/about.route");
const project = require("./router/project.route");
const contact = require("./router/contact.route");
const admin = require("./router/admin.route");

const app = express();

const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/home", home);
app.use("/about", upload, about);
app.use("/project", upload, project);
app.use("/contact", upload, contact);
app.use("/auth", upload, admin);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Port is Working');
});

module.exports = app;
