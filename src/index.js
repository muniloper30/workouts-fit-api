import express from 'express'; //Importamos express (de esta manera podemos usar imports/exports en lugar de require)
import { pool } from './db.js'; //Importamos el pool de conexiones
import workoutsRouter from './routes/workouts.routes.js' //Importamos la rutas de workouts, le colocamos el nombre que queramos

const app = express(); //Creamos una instancia de express

app.use(express.json()); //Para que express pueda entender los objetos JSON que recibe



const PORT =  process.env.PORT || 3000; //Definimos el puerto en el que se va a ejecutar la aplicación


app.use(workoutsRouter); //Usamos las rutas de workouts


 app.listen(PORT, () => {console.log(`Server running on port http://localhost:${PORT}`);}); //Levantamos el servidor en el puerto definido