import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function EditBook() {
  const navigate = useNavigate();
    const [EditBook, setEditBook] = useState({
        bookName: "",
        authorName: "",
        quantity: "",
      });

      const [ISBN, setISBN] = useState("");
    
      const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEditBook({ ...EditBook, [name]: value });
      };

      const handleISBNInput = (event) => {
        setISBN(event.target.value); // Capture ISBN input separately
      };
    
    
      const postData = async () => {
        try {
          const { bookName, authorName, quantity } = EditBook;

          const value = localStorage.getItem("token")
      console.log(value)
      let authResponse = await axios.get('/api/auth/verify',{
          headers:{
              token:value
          }
      })  

      if (authResponse.status === 401) {
        navigate("/login")
       }
    
       const response = await axios.put(`/api/admin/edit?isbn=${ISBN}`, {
        ...EditBook,
      });

    
          if (response.status === 200) {
            window.alert("Book Updated Successfully!");
          } else {
            window.alert("Something went wrong!");
          }
        } catch (error) {
          console.error(error);
    
          if (error.response && error.response.status === 400) {
            window.alert("Book Could Not Be Updated!");
          } else {
            window.alert("Something went wrong!");
          }
        }
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        await postData();
      };
  return (
    <>
    <div className="registration-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="registration-form">
          <h2>Edit Book</h2>

          <div className="form-group">
            <label htmlFor="ISBN">ISBN Number</label>
            <input
              type="text"
              name="ISBN"
              id="ISBN"
              autoComplete="off"
              value={EditBook.ISBN}
              onChange={handleISBNInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              autoComplete="off"
              value={EditBook.bookName}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              name="authorName"
              id="authorName"
              autoComplete="off"
              value={EditBook.authorName}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              autoComplete="off"
              value={EditBook.quantity}
              onChange={handleInput}
            />
          </div>
          <button className="RegisterBtn" type="submit">
            Update Book
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditBook