import { Personaje } from './personaje';


export class Pelicula {


    titulo: string;
    duracionMinutos: number;
    image: string;
    anyo: number;
    director: string;
    personajes: Personaje[] = [];
    argumento: string;
    id: number;



    constructor(titulo: string, duracionM: number, anyo: number, image: string, director: string, argumento: string) {
        this.titulo = titulo;
        this.duracionMinutos = duracionM;
        this.anyo = anyo;
        this.image = image;
        this.director = director;
        this.argumento = argumento;
    }

    addPersonaje(personaje: Personaje): void {
        this.personajes.push(personaje);
    }

    setImmediate(id: number){
        this.id= id;
    }
}