import sql from "../db.js";  // Importamos la conexión a la base de datos
import supabase from '../utils/supabaseClient.js'; //Importamos la instancia de Supabase


// Definimos las funciones los usuarios
export const getAllUsers = async (req, res) => {
    // Función para obtener todos los usuarios
    try {
      const users = await sql`SELECT * FROM users`;  // Realizamos la consulta usando el objeto sql
      res.send(users);  // Enviamos la respuesta con todos los usuarios
    } catch (error) {
      res.status(500).send({ message: error.message });  // Si hay un error, respondemos con un mensaje
    }
  }
  
  
  export const createUser = async (req, res) => {
    const { name, email, password } = req.body; // Extraemos los datos del body

    try {
        // Insertamos el usuario en Supabase
        const { data, error } = await supabase
            .from("users")
            .insert([{ name, email, password }]) // Insertamos los datos en la tabla "users"
            .select(); // Obtenemos el usuario insertado

        if (error) {
            return res.status(500).json({ message: error.message });
        }

        res.status(201).json({ message: "Usuario creado exitosamente", user: data[0] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};