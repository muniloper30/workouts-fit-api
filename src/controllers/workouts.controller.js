import { pool } from "../db.js";

export const getAllWorkouts = async (req, res) => {
  //Funcion para obtener todos los workouts
  const [rows] = await pool.query("SELECT * FROM workout");
  res.send(rows);
};

export const getWorkoutById = async (req, res) => {
  //Función para obtener un workout por su id

  const { id } = req.params; //Extraemos el id de los parametros
  const [rows] = await pool.query("SELECT * FROM workout WHERE id = ?", [id]); //Hacemos la consulta a la base de datos

  if (rows.length === 0) {
    //Si no se encuentra el workout
    res.status(404).send({ message: "Workout not found" }); //Enviamos un mensaje de error
    return;
  }

  res.send(rows[0]); //Enviamos la respuesta
};

export const createWorkout = async (req, res) => {
  //Funcion para crear un workout

  const { name, type, description, duration, difficulty } = req.body; //Extraemos los datos del body
  const [rows] = await pool.query(
    "INSERT INTO workout (name, type, description, duration, difficulty) VALUES (?, ?, ?, ?, ?)",
    [name, description, type, duration, difficulty]
  );

  res.send({
    id: rows.insertId,
    name,
    type,
    description,
    duration,
    difficulty,
  }); //Lo colocamos entre llaves para que lo envie como un objeto json
};

export const updateWorkout = async (req, res) => {
  //Funcion para actualizar un workout

  const { id } = req.params; //Extraemos el id de los parametros
  const { name, type, description, duration, difficulty } = req.body; //Extraemos los datos del body

  const [rows] = await pool.query(
    "UPDATE workout SET name = ?, type = ?, description = ?, duration = ?, difficulty = ? WHERE id = ?",
    [name, type, description, duration, difficulty, id]
  ); //Hacemos la consulta a la base de datos

  if (rows.affectedRows === 0) {
    //Si no se encuentra el workout
    res.status(404).send({ message: "Workout not found" }); //Enviamos un mensaje de error
    return; //Retornamos para que no se ejecute el codigo de abajo
  }

  res.send({ message: "Workout updated" }); //Enviamos la respuesta
};

export const deleteWorkout = async (req, res) => {
  //Funcion para eliminar un workout
  const { id } = req.params; //Extraemos el id de los parametros
  const [rows] = await pool.query("DELETE FROM workout WHERE id = ?", [id]); //Hacemos la consulta a la base de datos

  if (rows.affectedRows === 0) {
    //Si no se encuentra el workout
    res.status(404).send({ message: "Workout not found" }); //Enviamos un mensaje de error
    return; //Retornamos para que no se ejecute el codigo de abajo
  }

  res.send({ message: "Workout deleted" }); //Enviamos la respuesta
};
