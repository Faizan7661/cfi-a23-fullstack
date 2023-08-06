import express from 'express';
import userRoutes from './controllers/users/index1.js';


const app = express();
const port = 6001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Up and Running')
})

app.use('/api/users',userRoutes);

app.listen(port, () => {
    console.info('Server started at port ', port);
});