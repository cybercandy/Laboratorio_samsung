import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";
import { direccion } from "./Practica-Typescript-Nuri/direccion";
import { telefono } from "./Practica-Typescript-Nuri/telefono";

export class Persona {
  _nombre: string;
  _apellidos: string;
  _edad: number;
  _dni: string;
  _cumpleanos: Date;
  _colorFavorito: string;
  _sexo: string;
  _direcciones: Direccion[];
  _mails: Mail[];
  _telefonos: Telefono[];
  _notas: string[];

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string[]
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._cumpleanos = cumpleanos;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  //Métodos

  /**
   * Mostrar información persona
   */
  mostrarPersona(){
    console.log(`*** Datos personales de ${this._nombre} ***\n
        Nombre - ${this._nombre}
        Apellidos - ${this._apellidos}
        Edad - ${this._edad}
        DNI - ${this._dni}
        Cumpleaños - ${this._cumpleanos.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric'})}
        Color favorito - ${this._colorFavorito}
        Sexo - ${this._sexo}
    `);
    console.log(`Direcciones de ${this._nombre}: `);
    for(let direccion of this._direcciones){
        direccion.mostrarDireccion();
    }
    console.log(`Mails de ${this._nombre}:`);
    for(let mail of this._mails){
        mail.mostrarMail();
    }
    console.log(`Teléfonos de ${this._nombre}:`);
    for(let telefono of this._telefonos){
        telefono.mostrarTelefono();
    
    }
  }


    /**
     * Busca a la persona por su número de dni, y modifica los datos introducidos
     * @param dni Dni de la personas a buscar
     * @param direcciones Lista de direcciones a añadir
     * @param mails Lista de mails a añadir
     * @param telefonos Lista de teléfonos a añadir
     * @param personas Lista de personas
     * @returns True si encuentra a la persona con ese dni, false en otro caso
     */
    static actualizarDatos(dni: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], personas:Persona[]){
        for(let i = 0; i < personas.length; i++) {
            if(personas[i]._dni === dni){
                for(let j = 0; j< direcciones.length; j++){
                    personas[i].añadirNuevaDireccion(direcciones[j]);
                }
                for(let j = 0; j< mails.length; j++){
                    personas[i].añadirNuevoMail(mails[j]);
                }
                for(let j = 0; j< telefonos.length; j++){
                    personas[i].añadirNuevoTelefono(telefonos[j]);
                }
                return true;
            }
        }
        return false;
    }

    /**
     * Añade una nueva dirección a la persona
     * @param nuevaDireccion Dirección para añadir
     */
    añadirNuevaDireccion(nuevaDireccion: Direccion){
        
        this._direcciones.push(nuevaDireccion);
        
    }

    /**
     * Añade un nuevo mail a la persona
     * @param nuevoMail Mail para añadir
     */
    añadirNuevoMail(nuevoMail: Mail){

        this._mails.push(nuevoMail);

    }

    /**
     * Añade un nuevo mail a la persona
     * @param nuevoTelefono Mail para añadir
     */
    añadirNuevoTelefono(nuevoTelefono: Telefono){

        this._telefonos.push(nuevoTelefono);
    }
  
}
