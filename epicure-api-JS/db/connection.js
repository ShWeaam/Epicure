//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true,
        // poolSize: 5,
    })
        .then(db => console.log('Connected with MongoDB.'))
        .catch(err => console.log(`Unable to connect with MongoDB: ${err.message}`));
}

export default connectDB