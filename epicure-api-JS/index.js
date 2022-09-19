import connectDB from './db/connection.js';
import express from 'express';
import chefsRouter from './routes/chefs.js';
import resturantsRouter from './routes/resturants.js';
import dishesRouter from './routes/dishes.js';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv'
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT;
app.use(cors())
app.use('/chefs', chefsRouter);
app.use('/resturants', resturantsRouter);
app.use('/dishes', dishesRouter);

connectDB().then(async () => {

    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: __dirname });
    });

    app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
        console.log(`Now listening on port ${port}`);
    });
})