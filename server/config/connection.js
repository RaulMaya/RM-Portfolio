const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/rmportfolio" ||
    "mongodb://localhost/rmportfolio"
);

module.exports = mongoose.connection;
