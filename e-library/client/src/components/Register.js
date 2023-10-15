  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import axios from 'axios'
  import { useNavigate } from "react-router-dom";
  function Register() {
    const navigate = useNavigate()
    const [userRegistration, setUserRegistration] = useState({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      password2: "",
      address: "",
    });

    // const [UserRecord, setUserRecord] = useState([]);

    const handleInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name, value);
      setUserRegistration({ ...userRegistration, [name]: value });
    };

    

    const postData = async () => {
      try {
        const {
          firstName,
          lastName,
          email,
          mobileNumber,
          password,
          password2,
          address,
        } = userRegistration;
    
        const response = await axios.post("/api/user/register", {
          ...userRegistration
        });
    
        if (response.status === 200) {
          window.alert("User Registration Successful!");
          navigate("/")
        } else {
          window.alert("Something went wrong!");
        }
      } catch (error) {
        console.error(error);
    
        if (error.response && error.response.status === 400) {
          window.alert("Invalid Registration");
        } else {
          window.alert("Something went wrong!");
        }
      }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (userRegistration.password !== userRegistration.password2) {
        window.alert("Passwords don't match. Please try again.");
        return;
      }
      await postData();
    };
    
  
    return (
      <div className="registration-container">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="registration-form">
            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="off"
                value={userRegistration.firstName}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="off"
                value={userRegistration.lastName}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="MobileNumber">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                id="MobileNumber"
                autoComplete="off"
                value={userRegistration.mobileNumber}
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
                value={userRegistration.password}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                autoComplete="off"
                value={userRegistration.password2}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="off"
                value={userRegistration.address}
                onChange={handleInput}
              />
            </div>
            <button className="RegisterBtn" type="submit" >
              Register
            </button>
            <br />
            <span>
              Already have an account ?{" "}
              <Link to="/login" className="Login">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    );
  }

  export default Register;


  // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   const newUser = {
    //     ...userRegistration,
    //     id: new Date().getTime().toString(),
    //   };
    //   console.log(newUser);
    //   setUserRecord([...UserRecord, newUser]);
    //   setUserRegistration({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     mobileNumber: "",
    //     password: "",
    //     password2: "",
    //     address: "",
    //   });
    // };

   //   const response = await fetch("/api/user/register", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       firstName,
    //       lastName,
    //       email,
    //       mobileNumber,
    //       password,
    //       password2,
    //       address
    //     }),
    //   });

    //   const data = await response.json();

    //   if(data.status===409 || !data){
    //     window.alert("Invalid Registration")
    //     console.log("Invalid Registration");
    //   }else{
    //     window.alert("User Registration Successful");
    //     console.log("User Registration Successful");
    //   }

    // };