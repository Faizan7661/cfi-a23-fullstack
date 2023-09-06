import express from "express";
import userRoutes from "./controllers/users/index.js"
import transactionRoutes from "./controllers/transactions/index.js"


const app= express();
const port=2009;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Server is up and running`)
})


app.use('/bank',userRoutes);
app.use(`/bank`,transactionRoutes)

app.listen(port,(req,res)=>{
    console.info(`server is running on port number `,port)
})
