export class Actor{

    nombre: string;
    edad: number;
    nacionalidad: string;
    clip: string;
    vivo: boolean;
    imagen: string;


    constructor(nombre: string, edad: number, clip: string, nacionalidad: string, vivo: boolean, imagen: string){
        this.nombre= nombre;
        this.edad= edad;
        this.clip= clip;
        this.nacionalidad= nacionalidad;
        this.vivo= vivo;
        this.imagen= imagen;
    }


}