const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    const { MONGO_DB, MONGO_PASSWORD } = process.env;

    const MONGO_ATLAS_URL = `mongodb+srv://${MONGO_DB}:${MONGO_PASSWORD}@cluster0.vfx3aex.mongodb.net/?retryWrites=true&w=majority`;
    console.log(MONGO_ATLAS_URL);
    mongoose.connect(
      MONGO_ATLAS_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  } catch (e) {
    console.log("could not connect");
  }
};
module.exports = connectDB;
