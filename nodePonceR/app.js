import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import connectMongoose from './lib/connectMongoose.js';
import productsController from './controllers/productsController.js';

dotenv.config();

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a NodePonceR!');
});

app.get('/api/products', productsController.getProducts);

app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;
