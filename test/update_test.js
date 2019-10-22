const assert = require("assert");

const MarioChar = require("../models/mariochar");

describe("Updating records", function() {
  var char;

  beforeEach(done => {
    char = new MarioChar({
      name: "Mario"
    });
    char.save().then(() => done());
  });

  it("Updates one record in the database", done => {
    // ({obj to update}, {new data})
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Bowser" }).then(
      () => {
        MarioChar.findOne({ _id: char._id }).then(result => {
          assert(result.name === "Bowser");
          done();
        });
      }
    );
  });
});
