import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBook() {
  const navigate = useNavigate();
  const [ISBN, setISBN] = useState(''); // Separate state for ISBN input
  const [SingleBook, setSingleBook] = useState(null); // State for book details

  const handleISBNInput = (event) => {
    setISBN(event.target.value);
  };

  const postData = async () => {
    try {
      // ... (existing code)
  
      const response = await axios.get(`/api/admin/indiBook?isbn=${ISBN}`);
  
      if (response.status === 200 && response.data.book) {
        const bookDetails = response.data.book;
        setSingleBook(bookDetails);
  
        // Redirect to the individual book details page
        navigate(`/book-details/${bookDetails.ISBN}`);
      } else {
        setSingleBook(null);
      }
    } catch (error) {
      console.error(error);
      setSingleBook(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit button clicked"); // Add this line for debugging
    await postData();
  };
  

  return (
    <>
      <div className="registration-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="registration-form">
            <h2>Search Book</h2>

            <div className="form-group">
              <label htmlFor="ISBN">ISBN Number</label>
              <input
                type="text"
                name="ISBN"
                id="ISBN"
                autoComplete="off"
                value={ISBN}
                onChange={handleISBNInput}
              />
            </div>
            <button className="RegisterBtn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>



    </>
  );
}

export default SearchBook;
