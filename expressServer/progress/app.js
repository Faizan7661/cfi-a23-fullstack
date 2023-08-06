// api/cfia23/progress

import express from 'express';
import userRoutes from './controller/index.js';
const app = express();
const port = 3010;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Up and Running')
})

app.use('/api/cfiA23',userRoutes);


app.listen(port, () => {
    console.info('Server started at port ', port);
});