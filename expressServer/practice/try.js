import express from "express";
const app = express();

// // Endpoint for adding two numbers
// app.get('/add/:amount/:rate/:time', (req, res) => {
//   const amount = parseFloat(req.params.amount);
//   const rate = parseFloat(req.params.rate);
//   const time = parseFloat(req.params.time);
//   const sum = amount + rate + time;

//   res.json({ result: sum });
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



app.get('/', (req, res) => {
    let amount = (req.query.amount);
    let rate = (req.query.rate);
    let time = (req.query.time);
    const sum = (amount * rate * time)/100;
    
  
    res.send({SimpleInterest : sum});
  });
  
  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
