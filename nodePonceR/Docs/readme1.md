# Commit 1: Configuración inicial del proyecto (Backend Fundamentos)

## Descripción
En este commit, se configura la estructura básica del proyecto NodePonceR. Se establece una aplicación Express conectada a MongoDB mediante Mongoose, y se definen los modelos iniciales para productos y usuarios.

## Punto en el que nos encontramos
Estamos en la **primera parte de Backend Fundamentos**, donde se configura la conexión a MongoDB y se crean los modelos básicos. Falta implementar funcionalidades avanzadas como internacionalización, autenticación JWT, y rutas privadas.

## Dependencias instaladas
Las siguientes dependencias fueron instaladas en este punto:
- `dotenv`: Manejar variables de entorno.
- `ejs`: Motor de plantillas para renderizar vistas.
- `express`: Framework web para crear la aplicación.
- `mongoose`: ODM para interactuar con MongoDB.
- `morgan`: Middleware de logging para solicitudes HTTP.

## Resultados esperados
- El servidor Express se inicia correctamente.
- Los modelos Mongoose (`Product` y `User`) están definidos y listos para ser utilizados.
- La conexión a MongoDB funciona sin problemas.

## Pasos realizados
1. Crear el archivo `app.js` con la configuración inicial de Express.
2. Definir los modelos Mongoose en `models/Product.js` y `models/User.js`.
3. Crear el script `connectMongoose.js` para conectar a MongoDB.
4. Agregar un archivo `.env.example` para configurar variables de entorno.

## Próximos pasos
En el siguiente commit, crearemos el script `initDB.js` para inicializar la base de datos con datos de prueba.