import express from 'express';

const app = express();
const port = 5001;

//Middleware
app.use(express.json());

app.get('/hello',(req,res)=>{
    res.send('<h1>Hello World from Express Server from Adnan</h1>');
})



app.post('/learn',(req,res)=>{   
    //Print Request Headers
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    // setTimeout(() => {
    //     res.send('I am coming from Learn');
    // }, 2000);

    // res.send('I am coming from Learn Server ');
    res.status(200).json({message:'This is Sucessful'})
})

app.listen(port,()=>{
    console.log('Server is running at Port',port);
})  