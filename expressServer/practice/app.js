import express from 'express';

const app = express();

app.get('/hello',(req,res)=>{
    res.send('Hello World from Express Server from Adnan');
})

app.listen(5001,()=>{
    console.log('Server is running at Port 5001');
})