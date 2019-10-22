const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

// Create Model
const Author = mongoose.model("author", AuthorSchema);

// export to other files in project
module.exports = Author;
