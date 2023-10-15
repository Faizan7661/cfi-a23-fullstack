import express from "express";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
// let privateKey = "codeforindia";
import bookModel from "../../models/BookModel.js";

const router = express.Router();

//Adding  a Book

router.post("/addBook", async (req, res) => {
  try {
    let { bookName, ISBN, authorName, quantity } = req.body;

    if (!bookName) {
      return res.status(400).json({ error: "Enter bookName to continue" });
    }
    if (!ISBN) {
      return res.status(400).json({ error: "Enter ISBN Number to continue" });
    }
    if (!authorName) {
      return res.status(400).json({ error: "Enter author Name to continue" });
    }
    if (!quantity) {
      return res.status(400).json({ error: "Enter Quantity to continue" });
    }

    let bookDetails = new bookModel({
      bookName,
      ISBN,
      authorName,
      quantity,
    });
    await bookDetails.save();

    console.log(bookDetails);
    return res
      .status(200)
      .json({ success: "Book details updated Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


router.put('/edit', async (req, res) => {
  try {
    const { bookName, authorName, quantity } = req.body;
    const isbn = req.query.isbn;

    if (!bookName || !authorName || !quantity) {
      return res.status(400).json({ error: 'Incomplete book data' });
    }

    const updatedBook = await bookModel.findOneAndUpdate(
      { ISBN: isbn },
      { bookName, authorName, quantity },
      { new: true }
    );

    if (updatedBook) {
      return res.status(200).json({ success: 'Book Details Updated Successfully' });
    } else {
      return res.status(404).json({ error: 'ISBN Number not found. Book Details Not Updated' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Book
router.delete('/delete', async (req, res) => {
  try {
    const isbn = req.query.isbn;
    const deletedBook = await bookModel.findOneAndDelete({ ISBN: isbn });

    if (deletedBook) {
      return res.status(200).json({ success: 'Book is deleted' });
    } else {
      return res.status(404).json({ error: 'ISBN Number not found. Book not deleted.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/allBooks',  async (req, res) => {
  try {
    
    const allBooks = await bookModel.find();

    return res.status(200).json({ allBooks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/indiBook', async (req, res) => {
  try {
    const isbn = req.query.isbn;
    const book = await bookModel.findOne({ ISBN: isbn });

    if (book) {
      return res.status(200).json({ book });
    } else {
      return res.status(404).json({ error: 'ISBN Number not found. Book not found.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;