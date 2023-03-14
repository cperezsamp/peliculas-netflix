import {Actor} from './actor'
import {Personaje} from './personaje';


export class Pelicula{
  
    
    titulo: string;
    duracionMinutos: number;
    anyo: number;
    personajes: Personaje[]= [];


    constructor(titulo: string, duracionM: number, anyo: number ){
        this.titulo= titulo;
        this.duracionMinutos= duracionM;
        this.anyo= anyo;
    }

    addPersonaje(personaje: Personaje): void{
        this.personajes.push(personaje);
    }

}