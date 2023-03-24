export class Direccion {

    //Atributos
    _calle: string;
    _numero: number;
    _piso: number;
    _letra: string;
    _codigoPostal: string;
    _poblacion: string;
    _provincia: string;
  
    //Constructor
    constructor( 
        calle: string,
        numero: number,
        piso: number,
        letra: string,
        codigoPostal: string,
        poblacion: string,
        provincia: string
    ) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    //Métodos

    /**
     * Mostrar información dirección
     */
    mostrarDireccion(){
        console.log(`
            Calle - ${this._calle}
            Número - ${this._numero}
            Piso - ${this._piso}
            Letra - ${this._letra}
            Código postal - ${this._codigoPostal}
            Población - ${this._poblacion}
            Provincia - ${this._provincia}
        `)
    }
  }
  