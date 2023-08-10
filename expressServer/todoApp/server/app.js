import express from 'express';
import todoRoutes from './controllers/toDos/index.js';
import userRoutes from "./controllers/users/index.js"


const app = express();
const port = 3009;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Up and Running')
})

app.use('/api/users',userRoutes);
app.use('/api/toDos',todoRoutes);

app.listen(port, () => {
    console.info('Server started at port ', port);
});