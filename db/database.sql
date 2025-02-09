CREATE DATABASE IF NOT EXISTS workout-fit-db;

USE workout-fit-db;

CREATE TABLE  workout (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    duration VARCHAR(255) NOT NULL,
    difficulty VARCHAR(255) NOT NULL,
);


INSERT INTO workout (id, name, type, description, duration, difficulty) VALUES 
(1, 'Fran', 'CrossFit Benchmark', '21-15-9 de thrusters (95/65 lbs) y pull-ups', '5-10 min', 'Avanzado'),
(2, 'Murph', 'Hero WOD', '1 milla corriendo, 100 pull-ups, 200 push-ups, 300 air squats, 1 milla corriendo (con chaleco de 20/14 lbs opcional)', '40-60 min', 'Avanzado'),
(3, 'Cindy', 'CrossFit Benchmark', 'AMRAP 20 minutos: 5 pull-ups, 10 push-ups, 15 air squats', '20 min', 'Intermedio'),
(4, 'Barbara', 'CrossFit Benchmark', '5 rondas con 3 minutos de descanso: 20 pull-ups, 30 push-ups, 40 sit-ups, 50 squats', '30-40 min', 'Avanzado'),
(5, 'Chelsea', 'CrossFit Benchmark', 'EMOM 30 minutos: 5 pull-ups, 10 push-ups, 15 squats', '30 min', 'Intermedio'),
(6, 'Mary', 'CrossFit Benchmark', 'AMRAP 20 minutos: 5 handstand push-ups, 10 pistol squats, 15 pull-ups', '20 min', 'Avanzado'),
(7, 'Tabata Bodyweight', 'Entrenamiento Funcional', '8 rondas de 20 segundos de trabajo y 10 segundos de descanso de squats, push-ups, sit-ups y burpees', '16 min', 'Principiante'),
(8, 'EMOM Kettlebell', 'Entrenamiento Funcional', 'Cada minuto durante 12 min: 10 kettlebell swings, 10 goblet squats, 10 push-ups', '12 min', 'Intermedio'),
(9, 'Full Body Circuit', 'Entrenamiento Funcional', '3 rondas de: 15 burpees, 20 kettlebell swings, 25 box jumps, 30 sit-ups', '25-30 min', 'Intermedio'),
(10, 'Leg Burner', 'Entrenamiento Funcional', '4 rondas de: 20 lunges, 20 air squats, 20 jumping squats', '20 min', 'Intermedio'),
(11, 'Upper Body Blast', 'Entrenamiento Funcional', 'AMRAP 15 minutos: 10 push-ups, 10 pull-ups, 10 dips', '15 min', 'Intermedio'),
(12, 'Core Crusher', 'Entrenamiento Funcional', '3 rondas de: 20 sit-ups, 20 leg raises, 1 min plank', '15-20 min', 'Principiante'),
(13, 'Cardio Blast', 'Entrenamiento Funcional', '5 rondas de: 400m carrera, 20 burpees', '20-25 min', 'Intermedio'),
(14, 'Strength and Conditioning', 'Entrenamiento Funcional', '4 rondas de: 10 deadlifts, 15 push presses, 20 box jumps', '30 min', 'Avanzado'),
(15, 'Endurance Challenge', 'Entrenamiento Funcional', 'AMRAP 30 minutos: 500m remo, 20 kettlebell swings, 15 pull-ups', '30 min', 'Avanzado'),
(16, 'Annie', 'CrossFit Benchmark', '50-40-30-20-10 repeticiones de: double-unders y sit-ups', '10-15 min', 'Intermedio'),
(17, 'Nicole', 'CrossFit Benchmark', 'AMRAP 20 minutos: 400m carrera, máximas repeticiones de pull-ups', '20 min', 'Intermedio'),
(18, 'Jackie', 'CrossFit Benchmark', 'Por tiempo: 1000m remo, 50 thrusters (45 lbs), 30 pull-ups', '15-20 min', 'Intermedio'),
(19, 'Amanda', 'CrossFit Benchmark', '9-7-5 repeticiones de: muscle-ups y snatches (135/95 lbs)', '10-15 min', 'Avanzado'),
(20, 'Helen', 'CrossFit Benchmark', '3 rondas de: 400m carrera, 21 kettlebell swings, 12 pull-ups', '15-20 min', 'Intermedio');
