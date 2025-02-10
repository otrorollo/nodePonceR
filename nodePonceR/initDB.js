import readline from 'readline';
import mongoose from 'mongoose';
import connectMongoose from './lib/connectMongoose.js';
import Product from './models/Product.js';
import User from './models/User.js';

// Función para preguntar al usuario
function ask(questionText) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(questionText, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const initialUsers = [
  { email: 'admin@example.com', password: '1234' },
  { email: 'user1@example.com', password: '1234' }
];

const initialProducts = [ {
  name: 'Smartwatch Deportivo',
  price: 150,
  image: 'smartwatch.jpg',
  tags: ['electrónica', 'deporte', 'tecnología']
},
{
  name: 'Mochila de Senderismo',
  price: 60,
  image: 'mochila.jpg',
  tags: ['deporte', 'aire libre', 'viajes']
},
{
  name: 'Auriculares Inalámbricos',
  price: 80,
  image: 'auriculares.jpg',
  tags: ['electrónica', 'audio', 'tecnología']
}

];

async function initDB() {
  console.log('🚀 Iniciando script initDB.js');

  try {
    console.log('⏳ Conectando a MongoDB...');
    await connectMongoose();
    console.log('✅ Conectado a MongoDB.');

    // Preguntar al usuario antes de inicializar
    const answer = await ask('¿Estás seguro de que quieres vaciar la base de datos y crear datos iniciales? Escribe (si/no): ');
    if (answer.toLowerCase() !== 'si') {
      console.log('Operación abortada.');
      return;
    }

    // Eliminar colecciones existentes
    console.log('🧹 Limpiando la base de datos...');
    await Promise.all([
      Product.deleteMany({}),
      User.deleteMany({})
    ]);
    console.log('✔ Colecciones "products" y "users" eliminadas.');

    // Crear usuarios
    console.log('👤 Creando usuarios...');
    const users = await Promise.all(
      initialUsers.map(async (userData) => {
        const user = new User(userData);
        await user.save();
        return user;
      })
    );
    console.log(`📝 ${users.length} usuarios creados:`, users);

    // Crear productos
    console.log('🛍 Creando productos...');
    try {
      const products = initialProducts.map((productData, index) => ({
        ...productData,
        owner: index === 0 || index === 2 ? users[0]._id : users[1]._id // Asigna el primer y tercer producto al primer usuario, y el segundo al segundo usuario
      }));

      if (products.length === 0) {
        console.log('⚠ No hay productos definidos en initialProducts.');
      } else {
        await Product.insertMany(products);
        console.log(`🎁 ${products.length} productos creados:`, products);
      }

      console.log('✨ Base de datos inicializada correctamente.');
    } catch (error) {
      console.error('🚨 Error al crear productos:', error.message);
    }
  } catch (error) {
    console.error('🚨 Error al inicializar la base de datos:', error);
  } finally {
    mongoose.disconnect();
    console.log('🔌 Desconectado de MongoDB.');
  }
}

initDB();
