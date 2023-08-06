import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
const app = express();
const port = 5001;

//Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    res.append('adnan','This is Coming from Middleware');
    next();
})

app.get('/hello', (req, res) => {
    res.adnan = 'this is from middleware'
    res.send('<h1>Hello World from Express Server from Adnan</h1>');
})



app.post('/learn', (req, res) => {
    //Print Request Headers
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    console.log(req.adnan);
    // setTimeout(() => {
    //     res.send('I am coming from Learn');
    // }, 2000);

    // res.send('I am coming from Learn Server ');
    res.status(200).json({ message: 'This is Sucessful' })
})


app.post('/private', authMiddleware, (req, res) => {
    //Print Request Headers
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    console.log(req.payload);
    // setTimeout(() => {
    //     res.send('I am coming from Learn');
    // }, 2000);

    // res.send('I am coming from Learn Server ');
    res.status(200).json({ message: 'This is Private' })
})
app.listen(port, () => {
    console.log('Server is running at Port', port);
})