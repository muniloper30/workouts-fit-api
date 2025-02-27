import express from 'express';  // Importamos express (de esta manera podemos usar imports/exports en lugar de require)
import workoutsRouter from './routes/workouts.routes.js';  // Importamos las rutas de workouts
import cors from 'cors';  // Importamos cors para permitir peticiones de otros servidores

const app = express();  // Creamos una instancia de express

app.use(express.json());  // Para que express pueda entender los objetos JSON que recibe

const PORT = process.env.PORT || 3000;  // Se define el puerto propio o el 3000 por defecto

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenido a la API de Workouts</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
        }
        .container {
          text-align: center;
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        button {
          background-color: #4CAF50;
          color: white;
          padding: 15px 32px;
          font-size: 16px;
          margin: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
        .btn-container {
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Bienvenido a la API de Workouts</h1>
        <div class="btn-container">
          <a href="/api/workouts">
            <button>Ver Todos los Workouts</button>
          </a>
          <a href="/api/workouts/1">
            <button>Ver Workout por ID</button>
          </a>
        </div>
      </div>
    </body>
    </html>
  `);
})


const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:3000/api/workouts', 'http://localhost:3000/api/workouts/:id','https://workouts-app-brown.vercel.app'],  // Orígenes permitidos
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));  // Usamos cors con las opciones definidas

app.use(workoutsRouter);  // Usamos las rutas de workouts

// Habilitar CORS para todas las solicitudes

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);  // Levantamos el servidor en el puerto definido
});
