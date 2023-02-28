const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const BookController=require("../controllers/BooksController")
router.get("/books",BookController.getAllBooks);

router.post("/books",BookController.postBook);

// specific book
router.get("/books/:id",BookController.getBook);
// update book
router.patch("/books/:id",BookController.updateBook);
// delete book
router.delete("/books/:id",BookController.deleteBook);

module.exports = router;
