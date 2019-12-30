const Book = require("../models/Book");

module.exports = {
  // @route   GET api/books
  // @desc    Get all books
  // @access  Public
  index: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route   POST api/books
  // @desc    Create a new book
  // @access  Public
  create: async (req, res) => {
    const book = req.body;

    try {
      const newBook = await Book.create(book);

      res.status(201).json(newBook);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route   DELETE api/books
  // @desc    Delete a book
  // @access  Public
  delete: async (req, res) => {
    const bookId = req.params.id;

    try {
      await Book.findByIdAndDelete(bookId);

      res.status(200).json({ msg: "Book deleted" });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json(err.message);
    }
  }
};
