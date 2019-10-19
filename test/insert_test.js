const assert = require("assert");

const MarioChar = require("../models/mariochar");

// Describe tests
describe("Insert records", function() {
  // Create tests
  it("inserts a record into the database", function(done) {
    var char = new MarioChar({
      name: "Mario"
    });
    //save to database
    char.save().then(() => {
      // test if char has been saved.
      // isNew is a mongoose thing.
      assert(char.isNew === false);
      // signal to mocha that async test has completed.
      done();
    });
  });
});
