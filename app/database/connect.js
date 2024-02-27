import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING_ONLINE;

const connectDB = async () => {
  mongoose.connect(MONGODB_CONNECTION_STRING, {

  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

export default connectDB;