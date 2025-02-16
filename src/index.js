import express from 'express'; //Importamos express (de esta manera podemos usar imports/exports en lugar de require)
import { pool } from './db.js'; //Importamos el pool de conexiones
import workoutsRouter from './routes/workouts.routes.js' //Importamos la rutas de workouts, le colocamos el nombre que queramos
import cors from 'cors'; //Importamos cors para permitir peticiones de otros servidores


const app = express(); //Creamos una instancia de express

app.use(express.json()); //Para que express pueda entender los objetos JSON que recibe



const PORT =  process.env.PORT || 3000; // Se define el puerto propio o el 3000 por defect


const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:3000/api/workouts'],
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(workoutsRouter); //Usamos las rutas de workouts

// Habilitar CORS para todas las solicitudes



 app.listen(PORT, () => {console.log(`Server running on port http://localhost:${PORT}`);}); //Levantamos el servidor en el puerto definido

