import express from 'express';
import userRoutes from './controllers/toDos/index.js';


const app = express();
const port = 3009;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Up and Running')
})

app.use('/api/toDos',userRoutes);


app.listen(port, () => {
    console.info('Server started at port ', port);
});