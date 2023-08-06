import express from "express";
const app = express();
const port = 5003;

app.use(express.json());

app.get('/server2',(req,res)=>{
    res.send(`This is the 2nd Server`);
})

app.listen(port,()=>{
    console.log(`This server is woring on Port ${port}`)
})