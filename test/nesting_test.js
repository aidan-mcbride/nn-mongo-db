const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

describe("Nesting records", () => {
  var author1;

  beforeEach(done => {
    mongoose.connection.collections.authors.drop(() => done());
    author1 = new Author({
      name: "Nick Miller",
      books: [{ title: "Z is for Zombie", pages: 200 }]
    });
  });

  it("Creates an author with sub-documents", done => {
    author1.save().then(() => {
      Author.findOne({ name: "Nick Miller" }).then(record => {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("Adds a book to an author", done => {
    author1.save().then(() => {
      Author.findOne({ name: "Nick Miller" }).then(record => {
        // add book to books array
        record.books.push({ title: "The Pepperwood Chronicles", pages: 450 });
        // commit change, then assert that data was updated
        record.save().then(() => {
          Author.findOne({ name: "Nick Miller" }).then(record => {
            assert(record.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
