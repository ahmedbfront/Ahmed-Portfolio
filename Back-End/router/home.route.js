const router = require("express").Router();
const controller = require("../controller/home.controll");
const verifytoken = require('../helpers/verify.token');


router.get("/", controller.getHome);

router.post("/", verifytoken, controller.addNewHome);

router.put("/", verifytoken, controller.updateHome);

router.delete("/:id", verifytoken, controller.deleteHome);

module.exports = router;
