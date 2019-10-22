const assert = require("assert");

const MarioChar = require("../models/mariochar");

describe("Delete records", function() {
  var char;

  beforeEach(done => {
    char = new MarioChar({
      name: "Mario"
    });
    char.save().then(() => done());
  });

  it("Deletes one record from the database", function(done) {
    MarioChar.findOneAndRemove({ name: "Mario" }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});
