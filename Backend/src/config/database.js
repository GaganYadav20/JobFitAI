const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectToDB;
