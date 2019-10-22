const mongoose = require("mongoose");

// use ES6 Promises
mongoose.Promise = global.Promise;

// Connect to database *before* tests run
// basically a fixture/setup
before(done => {
  // Connect to MongoDB
  mongoose.connect("mongodb://localhost/testaroo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  // Detect when connection has been made.
  mongoose.connection
    .once("open", function() {
      console.info("🎉 Connection has been made");
      done();
    })
    .on("error", error => {
      console.info("Connection error:", error);
    });
});

// Drop characters collection before each test
beforeEach(done => {
  // Drop collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
