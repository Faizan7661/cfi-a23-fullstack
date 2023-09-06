import express from 'express'
import { readFile } from 'fs';
import fs from 'fs/promises'
import bcrypt from 'bcrypt'

import axios from 'axios'
import { fileURLToPath } from 'url';
const router = express.Router();

router.post(`/deposit`, async (req, res) => {
    try {
        
        let { accountNumber, amountToDeposit, pin } = req.body;

        let fileData = await fs.readFile(`data.json`);
        fileData = JSON.parse(fileData);

        let findEmail = fileData.find((ele) => ele.email === req.headers.email)

        
        if (!accountNumber) {
            res.status(401).json({ error: `Please Enter Account Number to continue` })
        }
        if (accountNumber !== findEmail.accountNumber) {
            res.status(401).json({ error: ` Account Number does'nt match` })

        }
        if (!amountToDeposit) {
            res.status(401).json({ error: `Please Enter Amount To Deposit to continue` })
        }
        if (!pin) {
            res.status(401).json({ error: `Please Enter Pin  Number to continue` })

        }

        if (!findEmail || findEmail.email !== req.headers.email) {
            return res.status(401).json({ error: 'Unauthorized Access' });
        }
        if (findEmail.pinNumber !== req.body.pin) {
            return res.status(401).json({ error: 'Incorrect Pin' });
        }

        findEmail.bankBalance += amountToDeposit;

        let transactionData = {
            type: 'deposit',
            amount: amountToDeposit,
            date: new Date().toISOString(),
        };

        findEmail.transactionsHistory.push(transactionData)
        await fs.writeFile(`data.json`, JSON.stringify(fileData))
        return res.status(200).json({ success: 'Amount Deposited successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: `Internal Server Error` })
    }
})


router.post(`/withdrawal`, async (req, res) => {
    try {
        let { accountNumber, amountToWithdraw, pin } = req.body;

        let fileData = await fs.readFile(`data.json`);
        fileData = JSON.parse(fileData);

        let findEmail = fileData.find((ele) => ele.email === req.headers.email)

        
        if (!accountNumber) {
            res.status(401).json({ error: `Please Enter Account Number to continue` })
        }
        if (accountNumber !== findEmail.accountNumber) {
            res.status(401).json({ error: ` Account Number does'nt match` })

        }
        if (!amountToWithdraw) {
            res.status(401).json({ error: `Please Enter withdrawal Amount to continue` })
        }
        if (!pin) {
            res.status(401).json({ error: `Please Enter Pin  Number to continue` })

        }

        if (!findEmail || findEmail.email !== req.headers.email) {
            return res.status(401).json({ error: 'Unauthorized Access' });
        }
        if (findEmail.pinNumber !== req.body.pin) {
            return res.status(401).json({ error: 'Incorrect Pin' });
        }

        findEmail.bankBalance -= amountToWithdraw;

        let transactionData = {
            type: 'withdraw',
            amount: amountToWithdraw,
            date: new Date().toISOString(),
        };

        findEmail.transactionsHistory.push(transactionData)
        await fs.writeFile(`data.json`, JSON.stringify(fileData))
        return res.status(200).json({ success: 'Amount withdrawal successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: `Internal Server Error` })
    }
})

router.get(`/balance`,async(req,res)=>{
    let {accountNumber,pin} =req.body;
    let fileData = await fs.readFile(`data.json`);
    let Data =JSON.parse(fileData);

    let findEmail = Data.find((ele)=>ele.email==req.headers.email)

    if (!accountNumber) {
        res.status(401).json({ error: `Please Enter Account Number to continue` })
    }
    if (accountNumber !== findEmail.accountNumber) {
        res.status(401).json({ error: ` Account Number does'nt match` })

    }
    if (!pin) {
        res.status(401).json({ error: `Please Enter Pin  Number to continue` })

    }

    if (findEmail.pinNumber !== req.body.pin) {
        return res.status(401).json({ error: 'Incorrect Pin' });
    }

    if(!findEmail){
        return res.status(401).json({error:`Email Not Found!`})
    }

    return res.status(200).json({Balance : findEmail.bankBalance})
    
})

router.get(`/transactionHistory`,async(req,res)=>{
    
    try {
        let {accountNumber,pin}=req.body;
        let fileData = await fs.readFile(`data.json`);
        fileData = JSON.parse(fileData);
        let findEmail= fileData.find((ele)=>ele.email==req.headers.email);
        
        if(!accountNumber){
            return res.status(401).json({error:`Please Enter Account Number to Continue`})
        }
        if(accountNumber !==findEmail.accountNumber){
            return res.status(401).json({error:`Incorrect Account Number`})
        }
        if(!pin && pin !== findEmail.pinNumber){
            return res.status(401).json({error:`Enter Valid Pin To Continue`})
        }

        return res.status(200).json({Transactions : findEmail.transactionsHistory})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: `Internal Server Error` })   
    }
})

export default router;