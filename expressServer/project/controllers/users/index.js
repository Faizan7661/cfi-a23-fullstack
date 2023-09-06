import express from 'express'
import { readFile } from 'fs';
import fs from 'fs/promises'
import bcrypt from 'bcrypt'

import axios from 'axios'
const router = express.Router();


function generateRandomAccountNumber() {
    const accountNumberLength = 12;
    let accountNumber = '';

    for (let i = 0; i < accountNumberLength; i++) {
        accountNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
    }

    return accountNumber;
}

router.post(`/register`, async (req, res) => {
    try {
        let { name, phoneNumber, email, password, password2, area, branch, pincode, typeOfAccount,pinNumber } = req.body;
        if (password2 !== password) {
            return res.status(400).json({ error: `Password does'nt match please try again!` });
        }
        let fileData = await fs.readFile(`data.json`)
        fileData = JSON.parse(fileData)
        let findEmail = fileData.find((ele) => ele.email == email);
        if (findEmail) {
            res.status(400).json({ error: `Email already exists, Please login!` })
        }
        password = await bcrypt.hash(password, 12)
        let bankBalance=0;
        let userData = {
            name,
            phoneNumber,
            email,
            password,
            area,
            branch,
            pincode,
            typeOfAccount,
            pinNumber,
            accountNumber: generateRandomAccountNumber(),
            bankBalance,
            transactionsHistory:[]
        }
        fileData.push(userData);
        await fs.writeFile(`data.json`, JSON.stringify(fileData));
        return res.status(200).json({ success: `User Registered Successfully!` })

    } catch (error) {
        console.error(`error`);
        return res.status(500).json({ error: `Internal Server Error` })
    }
})


router.post(`/login`,async(req,res)=>{
    try {
        console.log(req.body);
        let fileData = await fs.readFile(`data.json`);
        fileData = JSON.parse(fileData);
        let findEmail=fileData.find((ele)=>ele.email===req.body.email);
        if(!findEmail){
            return res.status(401).json({error:`Email Not Found`})
        }
        const matchPassword = await bcrypt.compare(req.body.password,findEmail.password);
        if(!matchPassword){
            res.status(401).json({error:`Incorrect Password`})
        }

        return res.status(200).json({success: "User Logged in successfully"})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: `Internal Server Error`})
    }
})


export default router;