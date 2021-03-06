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
  // @route   GET apu/books/:id
  // @desc    Get a book
  // @access  Public
  read: async (req, res) => {
    const bookId = req.params.id;

    try {
      const book = await Book.findById(bookId);

      res.status(200).json(book);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route   PATCH api/books/:id
  // @desc    Update a book
  // @access  Public
  update: async (req, res) => {
    const bookId = req.params.id;
    const book = req.body;

    try {
      const updatedBook = await Book.findByIdAndUpdate(bookId, book, {
        new: true
      });

      res.status(200).json(updatedBook);
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
