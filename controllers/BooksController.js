const Book = require("../models/Book");
module.exports.getAllBooks=async(req,res)=>{
    try {
        const books = await Book.find();
        res.json({ books });
      } catch (error) {
        res.json({
          message: error,
        });
      }
}

module.exports.getBook=async(req,res)=>{
    try {
        const books = await Book.findById(req.params.id);
        res.json({ books });
      } catch (error) {
        console.log(error);
        res.json({
          message: "error",
          err: error,
        });
      }
}

module.exports.postBook=async(req,res)=>{
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
      });
      try {
        const books = await book.save();
        res.json({ books });
      } catch (error) {
        console.log(err);
      }
}

module.exports.updateBook=async(req,res)=>{
    try {
        const books = await Book.updateOne(
          { _id: req.params.id },
          { $set: { title: req.body.title } }
        );
        res.send("updated");
      } catch (error) {
        console.log(error);
        res.json({
          message: "error",
          err: error,
        });
      }   
}

module.exports.deleteBook=async(req,res)=>{
    try {
        const books = await Book.findByIdAndRemove({ _id: req.params.id });
        res.json({ books });
      } catch (error) {
        console.log(error);
        res.json({
          message: "error",
          err: error,
        });
      }
}