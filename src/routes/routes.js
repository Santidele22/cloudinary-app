const { Router } = require("express");
const connectMultiparty = require("connect-multiparty");
const cloudinaryMiddleware = require("../cloudinary/cloudinary-middleware");
const controller = require("../controller/controller");
const router = Router();
router.get("/new", controller.getViewNew);
router.post(
  "/create",
  connectMultiparty,
  cloudinaryMiddleware,
  controller.getViewNew
);
module.exports = router;
