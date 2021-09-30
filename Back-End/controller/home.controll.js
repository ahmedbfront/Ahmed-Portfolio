const cloud = require("../helpers/cloudinary");
const fs = require("fs");

const Home = require("../model/home.model");

module.exports = {
  getHome: async (req, res) => {
    try {
      const result = await Home.find({}, { __v: 0 });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  addNewHome: async (req, res) => {
    try {
      const imgPath = await cloud.uploads(req.files[0].path, "Portfolio");
      fs.unlinkSync(req.files[0].path);
      
      const home = await new Home({
        name: req.body.name,
        paragraph: req.body.paragraph,
        logo: imgPath.url,
      }).save();

      res.json(home);

    } catch (err) {
      res.json({
        msg: "Errrror",
        err: err.message
      });
    }
  },

  updateHome: async (req, res) => {
    try {
      const imgPath = await cloud.uploads(req.files[0].path, "Portfolio");
      fs.unlinkSync(req.files[0].path);

      const result = await Home.updateOne(
        { _id: req.params.id, },
        {
          $set: {
            name: req.body.name,
            paragraph: req.body.paragraph,
            logo: imgPath.url,
          },
        }
      );
      res.json("The product has been modified successfully");
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteHome: async (req, res) => {
    try {
      const result = await Home.findByIdAndDelete({ _id: req.params.id });
      res.json("The product has been removed successfully");
    } catch (err) {
      res.json(err.message);
    }
  },
};
