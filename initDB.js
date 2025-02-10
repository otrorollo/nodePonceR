// nodePonceR/initDB.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Product from './models/Product.js';

// Cargar variables de entorno desde .env
dotenv.config();

// Verifica que MONGO_URI está definida
if (!process.env.MONGO_URI) {
  console.error('La variable de entorno MONGO_URI no está definida.');
  process.exit(1);
}

const initialData = {
  users: [
    { email: 'admin@example.com', password: '1234' },
    { email: 'user1@example.com', password: '1234' },
  ],
  products: [
    {
      name: 'iPhone 12',
      owner: 'admin@example.com',
      price: 800,
      image: 'https://example.com/iphone12.jpg',
      tags: ['mobile'],
    },
    {
      name: 'MacBook Pro',
      owner: 'user1@example.com',
      price: 1500,
      image: 'https://example.com/macbook.jpg',
      tags: ['work'],
    },
  ],
};

async function initDB() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    // Borrar colecciones existentes
    await Promise.all([User.deleteMany(), Product.deleteMany()]);
    console.log('Colecciones eliminadas.');

    // Crear usuarios
    const users = await User.insertMany(
      initialData.users.map((user) => ({ ...user, password: User.hashPassword(user.password) }))
    );
    console.log('Usuarios creados.');

    // Crear productos
    const products = initialData.products.map((product) => ({
      ...product,
      owner: users.find((u) => u.email === product.owner)?._id,
    }));
    await Product.insertMany(products);
    console.log('Productos creados.');

    // Desconectar de MongoDB
    await mongoose.disconnect();
    console.log('Base de datos inicializada.');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
}

initDB();