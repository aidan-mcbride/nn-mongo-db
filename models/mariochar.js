const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

// Create Model
const MarioChar = mongoose.model("mariochar", MarioCharSchema); // mariochar is collection name

// export to other files in project
module.exports = MarioChar;
