

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Termina el proceso si hay un error
  }
};

export default connectDB;