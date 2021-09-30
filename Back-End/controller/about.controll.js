const cloud = require("../helpers/cloudinary");
const fs = require("fs");

const About = require("../model/about.model");

module.exports = {
  getAbout: async (req, res) => {
    try {
      const result = await About.find({}, { __v: 0 });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  addNewAbout: async (req, res) => {
    try {
      const imgPath = await cloud.uploads(req.files[0].path, "Portfolio");
      fs.unlinkSync(req.files[0].path);
      
      const about = await new About({
        title: req.body.title,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        experience: req.body.experience,
        cv: req.body.cv,
        paragraph: req.body.paragraph,
        image: imgPath.url,
        skills: req.body.skills,
      }).save();

      res.json(about);

    } catch (err) {
      res.json({
        msg: "Errrror",
        err: err.message
      });
    }
  },

  updateAbout: async (req, res) => {
    try {
      const imgPath = await cloud.uploads(req.files[0].path, "Message");
      fs.unlinkSync(req.files[0].path);

      const result = await About.updateOne(
        { _id: req.params.id, },
        {
          $set: {
            title: req.body.title,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            experience: req.body.experience,
            cv: req.body.cv,
            paragraph: req.body.paragraph,
            image: imgPath.url,
            skills: req.body.skills,
          },
        }
      );
      res.json("The product has been modified successfully");
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteAbout: async (req, res) => {
    try {
      const result = await About.findByIdAndDelete({ _id: req.params.id });
      res.json("The product has been removed successfully");
    } catch (err) {
      res.json(err.message);
    }
  },
};
