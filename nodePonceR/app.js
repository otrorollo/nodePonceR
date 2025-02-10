import dotenv from 'dotenv'; // Importa dotenv para cargar variables de entorno
import express from 'express'; // Importa el framework Express para crear aplicaciones web
import logger from 'morgan'; // Importa el módulo morgan para logging de solicitudes HTTP

// Carga las variables de entorno desde .env
dotenv.config();

// Crea una instancia de la aplicación Express
const app = express();

// Configuración de la aplicación
app.set('views', 'views'); // Configura el directorio de vistas
app.set('view engine', 'ejs'); // Establece EJS como el motor de plantillas

// Middlewares básicos
app.use(logger('dev')); // Middleware para logging de solicitudes HTTP
app.use(express.json()); // Middleware para parsear el body que venga en formato JSON
app.use(express.urlencoded({ extended: false })); // Middleware para parsear el body urlencoded (formularios)
app.use(express.static('public')); // Middleware para servir archivos estáticos desde la carpeta 'public'

// Ruta básica para probar el servidor
app.get('/', (req, res) => {
  res.send('¡Bienvenido a NodePonceR!');
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Middleware para manejar errores generales
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: err.message }); // Respuesta JSON con el mensaje de error
});

// Exporta la instancia de Express como default
export default app;