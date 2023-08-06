import express from "express";
import calculatorRoutes from "./controllers/index.js";

const app = express();
const port = 5001;



app.get('/',(req,res)=>{
    res.send('This is a Simple Express Server');
})

app.use('/calculate',calculatorRoutes);

app.listen(port,()=>{
    console.info('Server turned on at port ',port);
})