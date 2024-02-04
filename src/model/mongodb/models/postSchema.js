const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// create a schema
const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
  image_id: String,
  created_at: Date,
});

// the schema is useless so far
// we need to create a model using it
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
