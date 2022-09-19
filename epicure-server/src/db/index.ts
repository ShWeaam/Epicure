import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  let connectionString = process.env.DB_CONNECTION_STRING ?? false;
  if (!connectionString)
    throw new Error(`Missing key DB_CONNECTION_STRING in env file`);

  await mongoose.connect(connectionString)
    .then(db => console.log('Connected with MongoDB.'))
    .catch(err => console.log(`Unable to connect with MongoDB: ${err.message}`));
}

export { connectDB }

