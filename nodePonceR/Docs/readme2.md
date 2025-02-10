# NodePonceR - Backend Fundamentos (Commit 2)

## Descripción
Inicialización de la base de datos con `initDB.js` y configuración del servidor Express en `server.js`. Modelos básicos (`Product`, `User`) y conexión a MongoDB con Mongoose.

## Estado Actual
- Script `initDB.js` para inicializar la base de datos.
- Servidor Express configurado en `server.js`.
- Modelos `Product` y `User` definidos.
- Conexión a MongoDB establecida.

## Dependencias
- `bcrypt`
- `cross-env`
- `dotenv`
- `ejs`
- `express`
- `mongodb`
- `mongoose`
- `morgan`

### Dependencias de Desarrollo
- `nodemon`

Instalar dependencias:
npm install bcrypt cross-env dotenv ejs express mongodb mongoose morgan
npm install nodemon --save-dev


## Resultados Esperados
- `initDB.js` inicializa la base de datos correctamente.
- El servidor Express se inicia en el puerto especificado.
- Conexión a MongoDB sin problemas.

## Pasos Realizados
1. **`initDB.js`**:
   - Crea usuarios iniciales.
   - Crea productos y los asigna a usuarios específicos.
2. **`server.js`**:
   - Configura Express y middlewares.
   - Maneja errores HTTP.
3. **Modelos (`Product`, `User`)**:
   - Definidos con Mongoose.
4. **`connectMongoose.js`**:
   - Maneja la conexión a MongoDB.

## Estructura del Proyecto
nodePonceR/
├── lib/
│ └── connectMongoose.js
├── models/
│ ├── Product.js
│ └── User.js
├── routes/
│ └── api/
│ └── products.js (pendiente)
├── .env
├── initDB.js
├── server.js
└── README2.md


## Scripts
- `npm start`: Inicia el servidor en producción.
- `npm run dev`: Inicia el servidor en desarrollo (con Nodemon).
- `npm run initDB`: Inicializa la base de datos.

## Próximos Pasos
- Implementar rutas CRUD para productos y usuarios.
- Añadir autenticación JWT.
- Configurar internacionalización (i18n).
- Implementar subida de imágenes con Multer.
