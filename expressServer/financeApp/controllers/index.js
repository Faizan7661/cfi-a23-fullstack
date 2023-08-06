import express from "express";

const router = express.Router();
/*-------------------------------simple interest ------------------------------------------ */
router.get('/si', (req, res) => {
    try {
        let p = req.query.p;
        let t = req.query.t;
        let r = req.query.r;
        if (!p || !t || !r) {
            return res.status(400).json({ error: 'Invalid Request, Please enter the given data' });
        }
        let simpleInterest = (p * t * r) / 100;
        return res.status(200).json({
            principalAmount: p,
            interest: simpleInterest,
            amount: (+p + simpleInterest)
        })
    } catch (error) {
        console.error('Error inside Simple Interest Controller while calculating Simple Interest  ', error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
});

/*-------------------------------compound interest ---------------------------------------- */



router.get('/ci', (req, res) => {
    try {
        let amount = parseFloat(req.query.amount);
        let rate = parseFloat(req.query.rate);
        let time = parseFloat(req.query.time);
        const A = amount * Math.pow(1 + rate / 100, time);
        let CompoundInterest = A.toFixed(2) - amount;

        const responsedata = {

            "Amount": amount,
            "RateOfInterest": rate,
            "TimePeriod": time,
            "Interest": CompoundInterest,
            "TotalAmountTobePaid": A.toFixed(2)

        };

        res.send(responsedata);
    } catch (error) {
        console.error("Error inside Compound Interest Controller while calculating Compound Interest", error);
        return res.status(500).json({ error: "Internal Server Error" });

    }

});


/*------------------------------------------EMI-- ---------------------------------------- */


router.get(`/emi`, (req, res) => {
    try {
        let amount = parseFloat(req.query.amount);
        let rate = parseFloat(req.query.rate);
        let time = parseFloat(req.query.time);

        if (isNaN(amount) || isNaN(rate) || isNaN(time)) {
            return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
        }

        const monthlyInterestRate = rate / 12 / 100;
        const numberOfMonths = time * 12;
        const emi = (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
            (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
        const totalInterest = (emi * numberOfMonths) - amount;
        const totalamount = amount + totalInterest;

        const Data = {
            'Amount': amount,
            'Monthly Emi': emi.toFixed(0),
            'Total Interest': totalInterest.toFixed(0),
            'Total Amount': totalamount.toFixed(0)
        }

        res.send(Data);
    } catch (error) {
        console.error("Error inside Compound Interest Controller while calculating EMI", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }

});


/*-------------------------------Fixed deposit ---------------------------------------- */

router.get('/fd', (req, res) => {
    try {
        let amount = parseFloat(req.query.amount);
        let rate = parseFloat(req.query.rate);
        let time = parseFloat(req.query.time);

        const P = amount;
        const r = rate / 12 / 100;
        const n = 1;
        const t = time;
        const fd = P * ((1 + (r / n)) ** (n * t));

        const responsedata = {

            "Amount"            : amount,
            "RateOfInterest"    : rate,
            "TimePeriod"        : time,
            "FD"                : fd.toFixed(0)

        };

        res.send(responsedata);

    } catch (error) {
        console.error("Error inside Compound Interest Controller while calculating Fixed deposit", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }

});


/*-------------------------------Mutual Fund---------------------------------------- */

router.get('/mf', (req, res) => {
    try {
        let amount = parseFloat(req.query.amount);
        let noofpayments = parseFloat(req.query.time);
        let interestrate = parseInt(req.query.rate);
        let p = amount;
        let r = interestrate;
        let t = noofpayments;
        let n =1

        const MutualFund = p * ((1 + (r / n)) ** (n * t));
    
        res.send({ MutualFund: MF });

    } catch (error) {
        console.error("Error inside Compound Interest Controller while calculating MF", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }
});


/*--------------------------------------Sip------------------------------------------ */

router.get(`/sip`, (req, res) => {
    try {
        const amount = req.query.amount;
        const interestRateperAnnum = req.query.rate;
        const time = req.query.time;

        if (isNaN(amount) || isNaN(interestRateperAnnum) || isNaN(time)) {
            return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
        }

        const monthlyInterestRate = (1 + interestRateperAnnum / 100) ** (1 / 12) - 1;
        const numberOfMonths = time * 12;

        const maturityAmount = amount * (1 + monthlyInterestRate) ** numberOfMonths;


        const totalInvestment = amount * numberOfMonths;
        const estimatedReturns = maturityAmount - totalInvestment;
        const total = totalInvestment + estimatedReturns

        const response = {
            'Invested Amount': totalInvestment.toFixed(0),
            'Est. returns': estimatedReturns.toFixed(0),
            'Total Value': total.toFixed(0),
        };

        res.send(response);

    } catch (error) {
        console.error("Error inside Compound Interest Controller while calculating SIP", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }
})






export default router;