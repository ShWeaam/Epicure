import express from "express";
import routes from './routes/index';
import { connectDB } from "./db/index";
import bodyParser from 'body-parser';
import cors from "cors";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { exit } from "process";

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.use(routes);

try {
    if (!port)
        throw new Error(`Missing key PORT in env file`);

    connectDB().then(async () => {
        app.get('/', (req, res) => {
            res.sendFile('index.html', { root: __dirname });
        });

        app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
            console.log(`Now listening on port ${port}`);
        });
    })
} catch (err) {
    console.log("Please configure all env variables in the env file");
    exit(-1);
}


