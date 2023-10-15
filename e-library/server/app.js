import express from "express";
import userRoutes from './controllers/users/index.js';
import bookRoutes from './controllers/tasks/index.js'
import authRoutes from './controllers/users/auth.js'
import "./dbConnect.js"

const app = express();
const port = 5002;

//JSON Body Parser
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Express Server is UP!')
});

app.use('/api/user',userRoutes);
app.use('/api/admin', bookRoutes);
app.use('/api/auth',authRoutes);


app.listen(port,()=>{
    console.info('Server is Running on Port -- ',port);
});