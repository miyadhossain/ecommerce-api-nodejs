const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.set("strictQuery", false);
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected Successfully!");
  } catch (error) {
    console.log("Database Error");
  }
};

module.exports = dbConnect;
