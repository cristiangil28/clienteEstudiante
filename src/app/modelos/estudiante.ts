export class Estudiante {
    id: number;
    nombre : String;
    apellidos : String;
    correo : String;
    telefono : number;
    tipoUsuario : String;
    documento : String;

    constructor(){
        this.id = 0;
        this.nombre = '';
        this.apellidos = '';
        this.correo = '';
        this.telefono = 0;
        this.tipoUsuario = '';
        this.documento = '';
    }
}
