import express from 'express';  // Importamos express (de esta manera podemos usar imports/exports en lugar de require)
import workoutsRouter from './routes/workouts.routes.js';  // Importamos las rutas de workouts
import cors from 'cors';  // Importamos cors para permitir peticiones de otros servidores

const app = express();  // Creamos una instancia de express

app.use(express.json());  // Para que express pueda entender los objetos JSON que recibe

const PORT = process.env.PORT || 3000;  // Se define el puerto propio o el 3000 por defecto

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Workouts! Aquí puedes ver los workouts.');
})


const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:3000/api/workouts', 'http://localhost:3000/api/workouts/:id'],  // Orígenes permitidos
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));  // Usamos cors con las opciones definidas

app.use(workoutsRouter);  // Usamos las rutas de workouts

// Habilitar CORS para todas las solicitudes

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);  // Levantamos el servidor en el puerto definido
});
