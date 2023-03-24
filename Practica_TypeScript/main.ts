import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

// Creación de registros
let persona1 = new Persona(
  "Pepito",
  "González González",
  31,
  "1111111111A",
  new Date("1992-11-11"),
  "Azul",
  "Masculino",
  [
    new Direccion("Calle 1", 1, 1, "A","11111", "Madrid", "Madrid"),
  ],
  [
    new Mail("Personal", "pepito.gonzalez@gmail.com"),
  ],
  [
    new Telefono("Móvil", "611111111"),
  ],
  ["Notas sobre Pepito"]
);

let persona2 = new Persona(
  "Manoli",
  "Martínez Martínez",
  22,
  "22222222B",
  new Date("2001-02-02"),
  "Rojo",
  "Femenino",
  [
    new Direccion("Calle 3", 3, 3, "C", "33333", "Valencia", "Valencia"),
  ],
  [
    new Mail("Personal", "manoli.martinez@gmail.com"),
  ],
  [
    new Telefono("Móvil", "633333333"),
  ],
  ["Notas sobre Manoli"]
);

let persona3 = new Persona(
  "Toño",
  "Fernández Fernández",
  40,
  "33333333C",
  new Date("1981-03-03"),
  "Verde",
  "Masculino",
  [
    new Direccion("Calle 4", 4, 4, "D","44444", "Barcelona", "Barcelona"),
  ],
  [
    new Mail("Trabajo", "tfernandez@empresa.com"),
  ],
  [
    new Telefono("Móvil", "666111222"),
    new Telefono("Trabajo", "930000000"),
  ],
  ["Notas sobre Toño"]
);

//Creamos una lista con todas las personas registradas
const personas: Persona[] = [persona1, persona2, persona3];


//Mostramos los registros de las personas
console.log(`\n************** Primera vez que mostramos los registros **************\n`);

for(const persona of personas){
    persona.mostrarPersona();
}

const dniBuscado = persona2._dni;
const nuevaDireccion = new Direccion("Calle Nueva", 33, 33, "G", "33333", "Vigo", "Vigo");
const nuevoMail = new Mail("Trabajo", "m.martinez@gamil.com");
const nuevoTelefono = new Telefono("Casa", "933333333");
const nuevoTelefono2 = new Telefono("Trabajo", "988222222");
const personaEncontrada = Persona.actualizarDatos(dniBuscado, [nuevaDireccion], [nuevoMail],[nuevoTelefono, nuevoTelefono2], personas);

if(personaEncontrada){
  console.log(`*** Actualizados los datos de la persona con dni ${dniBuscado} ***`);

}else{
    console.log(`*** No se ha encontrado a la persona buscada con dni ${dniBuscado} ***`);
}

//Mostramos los registros de nuevo
console.log(`\n*************** Registros después de añadir valores ***************\n`);

for(const persona of personas){
    persona.mostrarPersona();
}




