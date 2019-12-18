const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/books", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
