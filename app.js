const express = require("express");
const morgan = require("morgan");

const app = express();

// Initialize env variables
require("dotenv").config({ path: "process.env" });

// Initialize middleware
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
