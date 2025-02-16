const mongoose = require("mongoose");
const { DB_URI } = require("./config");

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;
