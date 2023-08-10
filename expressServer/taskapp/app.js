import express from 'express';
import userRoutes from  "./controllers/users/index.js" 
import todoRoutes from "./controllers/task/index.js"


const app = express();
const port = 3010;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Up and Running')
})

app.use('/api/users',userRoutes);
app.use('/api/toDos',todoRoutes);

app.listen(port, () => {
    console.info('Server started at port ', port);
});