const { Router } = require("express");
const controller = require("../controller/controller");
const router = Router();
router.get("/new", controller.getViewNew);
module.exports = router;
