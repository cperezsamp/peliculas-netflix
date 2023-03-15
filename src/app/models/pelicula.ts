import {Personaje} from './personaje';


export class Pelicula{
  
    
    titulo: string;
    duracionMinutos: number;
    image: string;
    anyo: number;
    director: string;
    personajes: Personaje[]= [];


    constructor(titulo: string, duracionM: number, anyo: number, image: string, director: string){
        this.titulo= titulo;
        this.duracionMinutos= duracionM;
        this.anyo= anyo;
        this.image= image;
        this.director= director;
    }

    addPersonaje(personaje: Personaje): void{
        this.personajes.push(personaje);
    }

}