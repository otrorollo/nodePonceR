

import dotenv from 'dotenv'; // Cargar variables de entorno desde .env
import http from 'node:http';
import debugLib from 'debug';
import app from './app.js';

// Configura dotenv
dotenv.config();

// Inicializa la librería de depuración
const debug = debugLib('nodeponcer:server');

// Define el puerto
const port = process.env.PORT || 3000;

// Crea el servidor HTTP
const server = http.createServer(app);

// Maneja eventos del servidor
server.on('error', (err) => console.error(err));
server.on('listening', () => debug(`Servidor arrancado en puerto ${port}`));

// Inicia el servidor
server.listen(port);