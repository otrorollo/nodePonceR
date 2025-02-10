// lib/connectMongoose.js (ESTADO ORIGINAL)
import mongoose from 'mongoose';

const dbName = 'nodePonceR';
const connectionString = `mongodb://localhost/${dbName}`;

async function connectMongoose() {
  try {
    await mongoose.connect(connectionString);
    console.log('MongoDB conectado:', mongoose.connection.host);
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    throw err;
  }
}

export default connectMongoose;
