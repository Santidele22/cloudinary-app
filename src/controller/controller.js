const cloudinary = require("../cloudinary/config/cloudinary-config");
const postSchema = require("../model/mongodb/models/postSchema");
class Controller {
  static getViewNew(req, res) {
    res.render("pages/new");
  }
  static create(req, res) {
    // Use Cloudinary uploader to upload to cloudinary sever
    // Access files uploaded from the browser using req.files
    cloudinary.uploader.upload(req.files.image.path, function (result) {
      // Create a post model
      // by assembling all data as object
      // and passing to Model instance
      const post = new postSchema({
        title: req.body.title,
        description: req.body.description,
        created_at: new Date(),
        // Store the URL in a DB for future use
        image: result.url,
        image_id: result.public_id,
      });
      // Persist by saving
      post.save(function (err) {
        if (err) {
          res.send(err);
        }
        // Redirect
        res.redirect("/");
      });
    });
  }
}
module.exports = Controller;
