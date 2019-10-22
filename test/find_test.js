const assert = require("assert");

const MarioChar = require("../models/mariochar");

beforeEach(done => {
  var char = new MarioChar({
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
});
