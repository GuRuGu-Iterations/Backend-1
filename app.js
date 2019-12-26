const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Initialize env variables
require("dotenv").config({ path: "process.env" });

// Connect to database
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection error:")
);
mongoose.connection.once("open", () => console.log("Connected to database"));

// Initialize middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/books", require("./routes/index"));

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ msg: "Not found!" });
});

// Handle all errors
app.use((err, req, res) => {
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
