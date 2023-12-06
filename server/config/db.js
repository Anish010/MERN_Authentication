const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const connectDB =  () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected"))
    .catch((e) => console.log(e));

  console.log("MongoDB Connected");

};

module.exports = connectDB;
