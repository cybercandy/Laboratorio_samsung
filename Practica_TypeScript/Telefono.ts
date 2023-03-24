export class Telefono {
    _tipo: string;
    _numero: string;
  
    constructor(tipo: string, numero: string) {
      this._tipo = tipo;
      this._numero = numero;
    }

    //Métodos

    /**
     * Mostrar información teléfono
     */
    mostrarTelefono(){
        console.log(`
            Tipo - ${this._tipo}
            Número - ${this._numero}
        `)
    }
  }
  