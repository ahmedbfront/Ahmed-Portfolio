const router = require("express").Router();
const controller = require("../controller/project.controll");
const verifytoken = require('../helpers/verify.token');


router.get("/", controller.getAllProjects);

router.get("/:id", controller.getOneProject);

router.post("/", verifytoken, controller.addNewProject);

router.put("/:id", verifytoken, controller.updateProject);

router.delete("/:id", verifytoken, controller.deleteProject);

module.exports = router;
