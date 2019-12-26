const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get("/", booksController.index);

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
