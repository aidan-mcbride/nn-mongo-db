const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost/testaroo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Detect when connection has been made.
mongoose.connection
  .once("open", function() {
    console.log("Connection has been made, now make fireworks");
  })
  .on("error", error => {
    console.info("Connection error:", error);
  });
