import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const [AddingBook, setAddingBook] = useState({
    bookName: "",
    ISBN: "",
    authorName: "",
    quantity: "",
  });


  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddingBook({ ...AddingBook, [name]: value });
  };

  const postData = async () => {
    try {
      const { bookName, ISBN, authorName, quantity } = AddingBook;

      // const token = localStorage.getItem("token");
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

      const response = await axios.post("/api/admin/addBook", { ...AddingBook }
      );

      if (response.status === 200) {
        window.alert("Book Added Successfully!");
      } else {
        window.alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        window.alert("Book Could Not Be Added!");
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
    <div className="registration-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="registration-form">
          <h2>Add A Book</h2>

          <div className="form-group">
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              autoComplete="off"
              value={AddingBook.bookName}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ISBN">ISBN Number</label>
            <input
              type="text"
              name="ISBN"
              id="ISBN"
              autoComplete="off"
              value={AddingBook.ISBN}
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
              value={AddingBook.authorName}
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
              value={AddingBook.quantity}
              onChange={handleInput}
            />
          </div>
          <button className="RegisterBtn" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;



// import React, { useState } from "react";
// import axios from "axios";

// function AddBook() {
//   const [AddingBook, setAddingBook] = useState({
//     bookName: "",
//     ISBN: "",
//     authorName: "",
//     quantity: "",
//   });

//   // const [BookRecord, setBookRecord] = useState([]);
//   const handleInput = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log(name, value);
//     setAddingBook({ ...AddingBook, [name]: value });
//   };

//   const postData = async () => {
//     try {
//       const {
//         bookName,
//         ISBN,
//         authorName,
//         quantity
//       } = AddingBook;
  
//       const response = await axios.post("/api/admin/addBook", {
//         ...AddingBook
//       });
  
//       if (response.status === 200) {
//         window.alert("Book Added SuccessFully!");
//       } else {
//         window.alert("Something went wrong!");
//       }
//     } catch (error) {
//       console.error(error);
  
//       if (error.response && error.response.status === 400) {
//         window.alert("Book Could Not Be Added!");
//       } else {
//         window.alert("Something went wrong!");
//       }
//     }
//   };
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await postData()
//   };
//   return (
//     <div className="registration-container">
//       <form action="" onSubmit={handleSubmit}>
//         <div className="registration-form">
//       <h2>Add A Book</h2>

//           <div className="form-group">
//             <label htmlFor="bookName">Book Name</label>
//             <input
//               type="text"
//               name="bookName"
//               id="bookName"
//               autoComplete="off"
//               value={AddingBook.bookName}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="ISBN">ISBN Number</label>
//             <input
//               type="text"
//               name="ISBN"
//               id="ISBN"
//               autoComplete="off"
//               value={AddingBook.ISBN}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="authorName">Author Name</label>
//             <input
//               type="text"
//               name="authorName"
//               id="authorName"
//               autoComplete="off"
//               value={AddingBook.authorName}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="quantity">Quantity</label>
//             <input
//               type="text"
//               name="quantity"
//               id="quantity"
//               autoComplete="off"
//               value={AddingBook.quantity}
//               onChange={handleInput}
//             />
//           </div>
//           <button className="RegisterBtn" type="submit">
//             Add Book
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddBook;
