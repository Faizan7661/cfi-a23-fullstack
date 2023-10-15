import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import HomePage from "./components/HomePage";
import EditBook from "./components/EditBook";
import AllBooks from "./components/AllBooks";
import Delete from "./components/Delete";
import SearchBook from "./components/SearchBook";
import BookDetails from "./components/BookDetails";
import Logout from "./components/Logout";
import WowLandingPage from "./components/LandingPage";
function App() {

  
  return (
    <div>
      <Routes>
      <Route path="/" element={<WowLandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/addBook" element={<AddBook/>} />
        <Route path="/editBook" element={<EditBook/>} />
        <Route path="/allBooks" element={<AllBooks/>} />
        <Route path="/deleteBook" element={<Delete/>} />
        <Route path="/singleBook" element={<SearchBook/>} />
        <Route path="/book-details/:isbn" element={<BookDetails />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>
    </div>
  );
}

export default App;
