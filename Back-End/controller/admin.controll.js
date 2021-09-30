const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../model/admin.model");

module.exports = {

  signUp: async (req, res) => {
    const emailExist = await Admin.findOne({email: req.body.email});
    if (emailExist) return res.json({
      msg: "Email Already Exist"
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const admin = await new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      }).save();
      res.json({
        success: "Your Account Has Been Successfully Registered",
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  logIn: async (req, res) => {
    const admin = await Admin.findOne({email: req.body.email});
    if (!admin) return res.json({
      msg: "Email not Found"
    });

    const validPass = await bcrypt.compare(req.body.password, admin.password);
    if (!validPass) return res.json({
      msg: "Invalid Password"
    });

    const token = jwt.sign({_id: admin._id}, process.env.TOKEN_SECRET);
    
    res.header("auth-token", token).json({
      success: "Login Successfully",
      token
    });
  }

};