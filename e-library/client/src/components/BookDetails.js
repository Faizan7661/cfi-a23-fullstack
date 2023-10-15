import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { isbn } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(`/api/admin/indiBook?isbn=${isbn}`);
        if (response.status === 200 && response.data.book) {
          setBookDetails(response.data.book);
        } else {
          // Handle the case where the book is not found or an error occurs
          setBookDetails(null);
        }
      } catch (error) {
        console.error(error);
        setBookDetails(null);
      }
    }

    fetchBookDetails();
  }, [isbn]);

  return (
    <div className="registration-container">
      {bookDetails ? (
        <div className="card">
          <h2>Name: {bookDetails.bookName}</h2>
          <h2>ISBN: {bookDetails.ISBN}</h2>
          <h2>Author Name: {bookDetails.authorName}</h2>
          <h2>Quantity: {bookDetails.quantity}</h2>
        </div>
      ) : (
        <p>Book not found or an error occurred.</p>
      )}
    </div>
  );
}

export default BookDetails;
