import { Router } from "express"; //Importamos Router de express para crear toda una seccion de rutas
import { createUser, getAllUsers } from '../controllers/users.controller.js'; //Importamos las funciones de los controladores de workouts


const router = Router(); //Creamos una instancia de Router




// Definimos las rutas para los usuarios
router.get('/api/users', getAllUsers); //Definimos la ruta para crear un nuevo usuario
router.post('/api/users', createUser); //Definimos la ruta para crear un nuevo usuario



export default router; //Exportamos el router por defecto


 