const router = require("express").Router();
const controller = require("../controller/admin.controll");

router.post('/signUp', controller.signUp);
router.post('/logIn', controller.logIn);

module.exports = router;
