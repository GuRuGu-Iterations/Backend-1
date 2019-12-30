const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get("/", booksController.index);

// @route   GET apu/books/:id
// @desc    Get a book
// @access  Public
router.get("/:id", booksController.read);

// @route   POST api/books
// @desc    Create a new book
// @access  Public
router.post("/", booksController.create);

router.patch("/:id", (req, res) => {
  res.status(201).json({ msg: "Update a book" });
});

// @route    DELETE api/books/:id
// @desc     Delete a book
// @access   Public
router.delete("/:id", booksController.delete);

module.exports = router;
