const router = require("express").Router();
const controller = require("../controller/about.controll");
const verifytoken = require('../helpers/verify.token');

router.get("/", controller.getAbout);

router.post("/", verifytoken, controller.addNewAbout);

router.put("/:id", verifytoken, controller.updateAbout);

router.delete("/:id", verifytoken, controller.deleteAbout);

module.exports = router;
