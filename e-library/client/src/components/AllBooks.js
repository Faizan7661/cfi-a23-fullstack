import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllBooks() {
  const navigate = useNavigate();
  let [GetAllBooks, setAllBooks] = useState([]);

  async function getAllBooks() {
    try {
      const value = localStorage.getItem("token");
      console.log(value);
      let authResponse = await axios.get("/api/auth/verify", {
        headers: {
          token: value,
        },
      });

      if (authResponse.status === 401) {
        navigate("/login");
      }
      let response = await axios.get(`/api/admin/allBooks`);
      setAllBooks(response.data.allBooks);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div className="registration-container">
      <div className="row">
        <div className="leftcolumn"></div>
        <div className="card-row">
          {GetAllBooks.map((ele) => (
            <div key={ele._id} className="card">
              <center>
                <h2>Name: {ele.bookName}</h2>
                <h2>ISBN: {ele.ISBN}</h2>
                <h2>Author Name: {ele.authorName}</h2>
                <h2>Quantity: {ele.quantity}</h2>
              </center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
