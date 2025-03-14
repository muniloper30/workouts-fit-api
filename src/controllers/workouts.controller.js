import sql from "../db.js";  // Importamos la conexión a la base de datos



// Definimos las funciones para los workouts 
export const getAllWorkouts = async (req, res) => {
  // Función para obtener todos los workouts
  try {
    const workouts = await sql`SELECT * FROM workout`;  // Realizamos la consulta usando el objeto sql
    res.send(workouts);  // Enviamos la respuesta con todos los workouts
  } catch (error) {
    res.status(500).send({ message: error.message });  // Si hay un error, respondemos con un mensaje
  }
};

export const getWorkoutById = async (req, res) => {
  // Función para obtener un workout por su id
  const { id } = req.params; // Extraemos el id de los parámetros

  try {
    const workouts = await sql`SELECT * FROM workout WHERE id = ${id}`;  // Consultamos la base de datos con la sintaxis de postgres

    if (workouts.length === 0) {
      // Si no se encuentra el workout
      return res.status(404).send({ message: "Workout not found" });
    }

    res.send(workouts[0]);  // Enviamos el primer resultado (el workout encontrado)
  } catch (error) {
    res.status(500).send({ message: error.message });  // Si hay un error, respondemos con un mensaje
  }
};

export const createWorkout = async (req, res) => {
  // Función para crear un workout
  const { name, type, description, duration, difficulty } = req.body; // Extraemos los datos del body

  try {
    const [newWorkout] = await sql`INSERT INTO workout (name, type, description, duration, difficulty) 
                                   VALUES (${name}, ${type}, ${description}, ${duration}, ${difficulty}) 
                                   RETURNING id`;  // Realizamos la inserción y obtenemos el nuevo workout con el ID

    // Construimos el objeto con los datos del nuevo workout
    const createdWorkout = {
      id: newWorkout.id,
      name,
      type,
      description,
      duration,
      difficulty,
    };

    res.status(201).send(createdWorkout);  // Enviamos el workout creado con el id
  } catch (error) {
    res.status(500).send({ message: error.message });  // Si hay un error, respondemos con un mensaje
  }
};

export const updateWorkout = async (req, res) => {
  // Función para actualizar un workout
  const { id } = req.params; // Extraemos el id de los parámetros
  const { name, type, description, duration, difficulty } = req.body; // Extraemos los datos del body

  try {
    const result = await sql`UPDATE workout SET name = ${name}, type = ${type}, description = ${description}, 
                            duration = ${duration}, difficulty = ${difficulty} WHERE id = ${id}`;

    if (result.count === 0) {
      // Si no se encuentra el workout
      return res.status(404).send({ message: "Workout not found" });
    }

    res.send({ message: "Workout updated" });  // Enviamos la respuesta indicando que se actualizó
  } catch (error) {
    res.status(500).send({ message: error.message });  // Si hay un error, respondemos con un mensaje
  }
};

export const deleteWorkout = async (req, res) => {
  // Función para eliminar un workout
  const { id } = req.params; // Extraemos el id de los parámetros

  try {
    const result = await sql`DELETE FROM workout WHERE id = ${id}`;  // Hacemos la consulta para eliminar el workout

    if (result.count === 0) {
      // Si no se encuentra el workout
      return res.status(404).send({ message: "Workout not found" });
    }

    res.send({ message: "Workout deleted" });  // Enviamos la respuesta indicando que se eliminó
  } catch (error) {
    res.status(500).send({ message: error.message });  // Si hay un error, respondemos con un mensaje
  }
};


