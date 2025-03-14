//SupabaseClient
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config() //Cargamos las variables de entorno

const SUPABASE_URL = process.env.SUPABASE_URL //Obtenemos la URL de Supabase
const SUPABASE_KEY = process.env.SUPABASE_KEY //Obtenemos

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) //Creamos una instancia de Supabase

export default supabase //Exportamos la instancia de Supabase