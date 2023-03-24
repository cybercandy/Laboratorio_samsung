export class Mail {
    _tipo: string;
    _direccion: string;
  
    constructor(tipo: string, direccion: string) {
      this._tipo = tipo;
      this._direccion = direccion;
    }

    //Métodos
    
    /**
     * Mostrar información mail
     */
    mostrarMail(){
        console.log(`
            Tipo - ${this._tipo}
            Dirección - ${this._direccion}
        `)
    }
  }
  