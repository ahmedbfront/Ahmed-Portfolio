const cloud = require("../helpers/cloudinary");
const fs = require("fs");

const Project = require("../model/project.model");

module.exports = {
  getAllProjects: async (req, res) => {
    try {
      const result = await Project.find({}, { __v: 0 });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  getOneProject: async (req, res) => {
    try {
      const result = await Project.findById(req.params.id);
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  addNewProject: async (req, res) => {
    try {
      const imgPath = await cloud.uploads(req.files[0].path, "Portfolio");
      fs.unlinkSync(req.files[0].path);
      
      const project = await new Project({
        name: req.body.name,
        skills: req.body.skills,
        image: imgPath.url,
        preview: req.body.preview,
      }).save();

      res.json(project);

    } catch (err) {
      res.json({
        msg: "Errrror",
        err: err.message
      });
    }
  },

  updateProject: async (req, res) => {
    try {
      const imgPath = await cloud.uploads(req.files[0].path, "Portfolio");
      fs.unlinkSync(req.files[0].path);

      const result = await Project.updateOne(
        { _id: req.params.id, },
        {
          $set: {
            name: req.body.name,
            skills: req.body.skills,
            image: imgPath.url,
            preview: req.body.preview,
          },
        }
      );
      res.json("The product has been modified successfully");
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteProject: async (req, res) => {
    try {
      const result = await Project.findByIdAndDelete({ _id: req.params.id });
      res.json("The product has been removed successfully");
    } catch (err) {
      res.json(err.message);
    }
  },
};
