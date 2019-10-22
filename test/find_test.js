const assert = require("assert");

const MarioChar = require("../models/mariochar");

var char;

beforeEach(done => {
  char = new MarioChar({
    name: "Mario"
  });
  char.save().then(() => done());
});

describe("Find records", function() {
  it("Find one record from the database", function(done) {
    MarioChar.findOne({ name: "Mario" }).then(result => {
      assert(result.name === "Mario");
      done();
    });
  });

  it("Find one record by ID from the database", function(done) {
    MarioChar.findOne({ _id: char._id }).then(result => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
