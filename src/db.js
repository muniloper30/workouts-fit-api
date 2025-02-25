import dotenv from 'dotenv';  // Importamos dotenv para cargar las variables de entorno
import postgres from "postgres";  // Importamos el paquete 'postgres'

dotenv.config();  // Cargamos las variables de entorno desde el archivo .env

// Usamos la cadena de conexión directamente desde el archivo .env
const connectionString = process.env.DATABASE_URL;  

// Creamos una instancia de conexión
const sql = postgres(connectionString);

export default sql;  // Exportamos la instancia de sql para usarla en otros archivos
