import { Router } from "express"; //Importamos Router de express para crear toda una seccion de rutas
import { getAllWorkouts, getWorkoutById, createWorkout, updateWorkout, deleteWorkout,} from '../controllers/workouts.controller.js'; //Importamos las funciones de los controladores de workouts


const router = Router(); //Creamos una instancia de Router


// Definimos las rutas para workouts
router.get('/api/workouts', getAllWorkouts); //Definimos la ruta para obtener todos los workouts
router.get('/api/workouts/:id', getWorkoutById); //Definimos la ruta para obtener un workout por su id
router.post('/api/workouts', createWorkout);//Definimos la ruta para crear un workout
router.put('/api/workouts/:id', updateWorkout);//Definimos la ruta para actualizar un workout
router.delete('/api/workouts/:id', deleteWorkout);//Definimos la ruta para eliminar un workout





export default router; //Exportamos el router por defecto


