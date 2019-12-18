const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Get books" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ msg: "Get a book" });
});

router.post("/", (req, res) => {
  res.status(201).json({ msg: "Create a book" });
});

router.patch("/:id", (req, res) => {
  res.status(201).json({ msg: "Update a book" });
});

router.delete("/:id", (req, res) => {
  res.status(201).json({ msg: "Delete a book" });
});

module.exports = router;
