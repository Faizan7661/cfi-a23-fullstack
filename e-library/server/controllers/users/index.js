import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  userRegisterValidations,
  errorMiddleware,
  userLoginValidation,
  errorMiddlewareForLogin,
} from "../../middlewares/validations/index.js";
import sendEmail from "../../utils/sendEmail.js";
import userModel from "../../models/UserModels.js";
const router = express.Router();

function generateRandomString(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

router.post(
  "/register",
  userRegisterValidations(),
  errorMiddleware,
  async (req, res) => {
    try {
      console.log(req.body);
      let {
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        password2,
        address,
      } = req.body;
      if (password2 !== password) {
        return res.status(400).json({
          message: "Passwords don't match please try again.",
          status: false,
        });
      }

      let findEmail = await userModel.findOne({ email });
      console.log(findEmail);
      if (findEmail) {
        return res.status(409).json({
          message: "Email already exists please login",
          status: false,
        });
      }
      password = await bcrypt.hash(password, 12);
      const verificationToken = generateRandomString(32);

      let userData = {
        firstName,
        lastName,
        email,
        password,
        mobileNumber,
        address: address ? address : "Universe",
        books: [],
        isEmailVerified: false,
        verificationToken,
      };

      let userDataPayload = new userModel(userData);
      await userDataPayload.save();
      // userDataPayload.save(); //Can be done without await too

      await sendEmail(email, verificationToken);
      res
        .status(200)
        .json({ message: "User Signed up Successfully!", status: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error Please Try Again!",
        status: false,
      });
    }
  }
);

router.post(
  "/login",
  userLoginValidation(),
  errorMiddlewareForLogin,
  async (req, res) => {
    try {
      console.log(req.body);
      let findEmail = await userModel.findOne({ email: req.body.email });
      if (!findEmail) {
        return res.status(401).json({ error: "Email Not Found" });
      }
      const matchPassword = await bcrypt.compare(
        req.body.password,
        findEmail.password
      );
      if (!matchPassword) {
        return res.status(401).json({ error: "incorrect password" });
      }
      //Generate Access Token
      let payload = {
        email: req.body.email,
        role: "user",
      };
      let privateKey = "codeforindia";
      var token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
      return res
        .status(200)
        .json({ message: "User logged in Successfully!", status: true, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error Please Try Again!",
        status: false,
      });
    }
  }
);

router.get("/verify-email", async (req, res) => {
  // console.log("inside api/user/verify-email");
  try {
    const { token } = req.query;
    const user = await userModel.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ error: "User not found or token expired" });
    }
    user.isEmailVerified = true;
    await user.save();

    res.send("Your email is verified. Please proceed to login.");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error Please Try Again!",
      status: false,
    });
  }
});

router.post("/schedule", async (req, res) => {
  try {
    console.log(req.body);

    return res
      .status(200)
      .json({ message: "Task Scheduled Successfully!", status: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
});

export default router;

// import express from "express";
// import bcrypt from "bcrypt";
// import fs from "fs/promises";
// import jwt from "jsonwebtoken";
// import {
//   userRegisterValidations,
//   errorMiddleware,
//   userLoginValidation,
//   errorMiddlewareForLogin,
// } from "../../middlewares/validations/index.js";

// import sendEmail from "../../utils/sendEmail.js";
// const router = express.Router();

// function generateRandomString(length) {
//   const characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let randomString = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
//   }

//   return randomString;
// }

// router.post(
//   "/register",
//   userRegisterValidations(),
//   errorMiddleware,
//   async (req, res) => {
//     try {
//       console.log(req.body);
//       let {
//         firstName,
//         lastName,
//         email,
//         mobileNumber,
//         password,
//         password2,
//         address,
//       } = req.body;
//       if (password2 !== password) {
//         return res.status(400).json({
//           message: "Passwords don't match please try again.",
//           status: false,
//         });
//       }
//       // Use fs.readFile() method to read the file
//       let fileData = await fs.readFile("data.json");
//       fileData = JSON.parse(fileData);
//       let findEmail = fileData.find((ele) => ele.email == email);
//       if (findEmail) {
//         return res.status(409).json({
//           message: "Email already exists please login",
//           status: false,
//         });
//       }
//       password = await bcrypt.hash(password, 12);
//       const verificationToken = generateRandomString(32);

//       let AdminData = {
//         firstName,
//         lastName,
//         email,
//         password,
//         mobileNumber,
//         address,
//         books : [],
//         isEmailVerified : false,
//         verificationToken,

//       };
//       fileData.push(AdminData);
//       await sendEmail(email, verificationToken);

//       //fs.writeFile
//       await fs.writeFile("data.json", JSON.stringify(fileData));
//       res
//         .status(200)
//         .json({ message: "User Signed up Successfully!", status: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         message: "Internal Server Error Please Try Again!",
//         status: false,
//       });
//     }
//   }
// );

// router.post(
//   "/login",
//   userLoginValidation(),
//   errorMiddlewareForLogin,
//   async (req, res) => {
//     try {
//       console.log(req.body);
//       // Use fs.readFile() method to read the file
//       let fileData = await fs.readFile("data.json");
//       fileData = JSON.parse(fileData);
//       let findEmail = fileData.find((ele) => ele.email == req.body.email);
//       if (!findEmail) {
//         return res.status(401).json({ error: "Email Not Found" });
//       }
//       const matchPassword = await bcrypt.compare(
//         req.body.password,
//         findEmail.password
//       );
//       if (!matchPassword) {
//         return res.status(401).json({ error: "incorrect password" });
//       }
//       //Generate Access Token
//       let payload = {
//         email: req.body.email,
//         role: "user",
//       };
//       let privateKey = "codeforindia";
//       var token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
//       return res
//         .status(200)
//         .json({ message: "User logged in Successfully!", status: true, token });

//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         message: "Internal Server Error Please Try Again!",
//         status: false,
//       });
//     }
//   }
// );

// router.get('/verify-email', async (req, res) => {
//   try {
//     const { token } = req.query;

//     let fileData = await fs.readFile('data.json')
//     fileData = JSON.parse(fileData);
//     const user = fileData.find((ele) => ele.verificationToken === token);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found or token expired' });
//     }

//     user.isEmailVerified = true;
//     await fs.writeFile('data.json', JSON.stringify(fileData));

//     res.send('Your email is verified. Please proceed to login.');

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Internal Server Error Please Try Again!",
//       status: false,
//     });
//   }
// });
// export default router;
