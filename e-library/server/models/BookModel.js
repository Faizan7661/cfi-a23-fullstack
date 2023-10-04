import mongoose from "mongoose";
let bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("Books", bookSchema, "books");

export default bookModel;
