import express from "express";
const app = express();
let port = 5002;

app.use(express.json());

app.get('/server1',(req,res)=>{
    res.send(`Hello I'am Faizan And i'am sending This From Server 1`+`\nAnd now Iam modifying it and adding a new Line in the next line`);

})


app.listen(port,()=>{
    console.log(`surver is running at port number ${port}`)
})