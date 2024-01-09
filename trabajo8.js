// Crear un objeto para almacenar los equipos y los partidos
let equipos = {};
let partidos = ["Cuartos", "Semifinales", "Finales"];

// Pedir al usuario que ingrese los nombres de ocho equipos
for (let i = 1; i <= 8; i++) {
  equipos["Equipo" + i] = prompt("Nombre del equipo " + i + ":");
}

// Simular los partidos y avanzar a la siguiente ronda
for (let ronda of partidos) {
  console.log(ronda + ":");
  let ganadores = {};
  for (let i = 1; i <= 4; i++) {
    let equipoA = "Equipo" + (2 * i - 1);
    let equipoB = "Equipo" + (2 * i);
    let ganador = prompt(equipos[equipoA] + " - " + equipos[equipoB] + ":");
    ganadores["Equipo" + i] = equipos["Equipo" + (ganador === "a" ? (2 * i - 1) : 2 * i)];
  }
  equipos = ganadores;
}

// Anunciar al campeon
console.log("El campeon es: " + equipos["Equipo1"]);