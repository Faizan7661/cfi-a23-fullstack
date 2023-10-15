import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
      });

    // const [UserLoginRecord, setUserLoginRecord] = useState([]);
      
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setUserLoginData({ ...userLoginData, [name]: value });
        
      };

      const postData = async () => {
        try {
        
          const {
            email,
            password
          } = userLoginData;
      
          const response = await axios.post("/api/user/login", {
            ...userLoginData
          });
          console.log(response.data.token);
          let token = response.data.token;
          localStorage.setItem("token", token);

      
          if (response.status === 200) {
            const { token } = response.data;
            window.alert("User login Successful!");
            navigate("/home")
          } else {
            window.alert("Something went wrong!");
          }
        } catch (error) {
          console.error(error);
      
          if (error.response && error.response.status === 400) {
            window.alert("Invalid Login Request");
          } else {
            window.alert("Something went wrong!");
          }
        }
      };
      

      const handleSubmit = async (event) => {
        event.preventDefault();
        await postData()
        
      };


  return (
    <div className="registration-container">
      <form  onSubmit={handleSubmit}>
        <div className="registration-form">
      <h2>Login</h2>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={userLoginData.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={userLoginData.password}
              onChange={handleInput}
            />
          </div>
          <button className="RegisterBtn" type="submit" >
            Login
          </button>
          <br />
          <span>
            Don't have an account ?{" "}
            <Link to="/register" className="Register">
              Sign Up
            </Link>
          </span>
          
        </div>
      </form>
    </div>
  );
}

export default Login;
