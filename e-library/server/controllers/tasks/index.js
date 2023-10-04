import express from "express";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import validationMiddleware from "../../middlewares/auth/token.js";
let privateKey = "codeforindia";
import bookModel from "../../models/BookModel.js";
import userModel from "../../models/UserModels.js";

const router = express.Router();

//Adding  a Book

router.post("/", validationMiddleware, async (req, res) => {
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

    const userEmail = req.payload.email;
    const user = await userModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(401).json({ error: "Unauthorized Access" });
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

// editBookDetails
router.put("/", validationMiddleware, async (req, res) => {
  try {
    let { bookName, authorName, quantity } = req.body;
    const { isbn } = req.params;

    if (!bookName) {
      return res.status(400).json({ error: "Enter bookName to continue" });
    }
    if (!authorName) {
      return res.status(400).json({ error: "Enter author Name to continue" });
    }
    if (!quantity) {
      return res.status(400).json({ error: "Enter Quantity to continue" });
    }
    // Find the book by ISBN and update its details
    const updatedBook = await bookModel.findOneAndUpdate(
      { ISBN: isbn },
      { bookName, authorName, quantity },
      { new: true } // Return the updated document
    );

    if (updatedBook) {
      return res
        .status(200)
        .json({ success: "Book Details Updated Successfully" });
    } else {
      return res
        .status(404)
        .json({ error: "ISBN Number not found. Book Details Not Updated" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//deleteBook
router.delete("/", validationMiddleware, async (req, res) => {
  try {
    let { ISBN } = req.body;

    if (!ISBN) {
      return res.status(400).json({ error: "Enter ISBN Number to continue" });
    }
    let fileData = await fs.readFile("data.json");
    let data = JSON.parse(fileData);
    let findEmail = data.find((ele) => ele.email === req.payload.email);

    const indexToDelete = findEmail.books.findIndex(
      (book) => book.ISBN === req.body.ISBN
    );

    if (indexToDelete !== -1) {
      findEmail.books.splice(indexToDelete, 1);
      res.send("Book deleted successfully.");
    } else {
      res.status(404).send("ISBN Number not found. Book not deleted.");
    }

    await fs.writeFile("data.json", JSON.stringify(data));
    return res.status(200).json({ success: "Book is deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//fetching ALL books
router.get("/", validationMiddleware, async (req, res) => {
  try {
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
    const findEmail = fileData.find(
      (element) => element.email === req.payload.email
    );
    let allBooks = findEmail.books;
    // console.log(allBooks);
    return res.status(200).json({ allBooks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// fetch individual book
router.get("/indiUser", validationMiddleware, async (req, res) => {
  try {
    let { ISBN } = req.body;
    if (!ISBN) {
      return res.status(400).json({ error: "Enter ISBN Number to continue" });
    }

    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
    const findEmail = fileData.find(
      (element) => element.email === req.payload.email
    );
    let bookFound = false;

    for (let i = 0; i < findEmail.books.length; i++) {
      if (findEmail.books[i].ISBN == ISBN) {
        let book = findEmail.books[i];
        bookFound = true;
        return res.status(200).json({ book });
      }
    }

    if (!bookFound) {
      return res.status(404).send("ISBN Number not found. Book not found.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/auth", validationMiddleware, (req, res) => {
  return res.status(200).json({ success: "Token is valid" });
});

export default router;
