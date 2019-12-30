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

// @route   POST api/books
// @desc    Create a new book
// @access  Public
router.post("/", booksController.create);

router.patch("/:id", (req, res) => {
  res.status(201).json({ msg: "Update a book" });
});

router.delete("/:id", (req, res) => {
  res.status(201).json({ msg: "Delete a book" });
});

module.exports = router;
