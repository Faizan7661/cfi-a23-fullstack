import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Delete() {
    const navigate = useNavigate();
    let [DeleteBook, setDeleteBook]= useState("");

    const handleISBNInput = (event) => {
        setDeleteBook(event.target.value); // Capture ISBN input separately
      };

      const postData = async () => {
        try {
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
    
       const response = await axios.delete(`/api/admin/delete?isbn=${DeleteBook}`);

    
          if (response.status === 200) {
            window.alert("Book Deleted Successfully!");
          } else {
            window.alert("Something went wrong!");
          }
        } catch (error) {
          console.error(error);
    
          if (error.response && error.response.status === 400) {
            window.alert("Book Could Not Be Deleted!");
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
          <h2>Delete Book</h2>

          <div className="form-group">
            <label htmlFor="ISBN">ISBN Number</label>
            <input
              type="text"
              name="ISBN"
              id="ISBN"
              autoComplete="off"
              value={DeleteBook.ISBN}
              onChange={handleISBNInput}
            />
          </div>
          <button className="RegisterBtn" type="submit">
            Delete Book
          </button>
        </div>
      </form>
    </div>
    </>

  )
}

export default Delete