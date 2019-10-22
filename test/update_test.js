const assert = require("assert");

const MarioChar = require("../models/mariochar");

describe("Updating records", function() {
  var char;

  beforeEach(done => {
    char = new MarioChar({
      name: "Mario",
      weight: 50
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

  it("Increments weight of all records by one", done => {
    // $inc is mongodb update operator
    // https://docs.mongodb.com/manual/reference/operator/update/inc/
    MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then(result => {
        assert(result.weight === 51);
        done();
      });
    });
  });
});
