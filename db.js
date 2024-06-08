const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.mongoDBURL;
// console.log(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected..");
  } catch (err) {
    console.error(err.message);

    // Exit the process
    process.exit(1);
  }
};

module.exports = connectDB;
