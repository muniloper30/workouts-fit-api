import { createPool } from "mysql2/promise";//Importamos la libreria mysql2/promise para poder usar el pool de conexiones

export const pool = createPool({ //Cremos el pool de conexiones
    host: "localhost",
    user: "root",
    password: "",
    database: "workout_fit_db",
})