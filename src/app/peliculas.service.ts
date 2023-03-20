import { Injectable } from '@angular/core';
import { Pelicula } from './models/pelicula';
import { ActoresService } from './actores.service';
import { Personaje } from './models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //loQueElVientoSeLlevo: Pelicula;
  //elPadrino: Pelicula;
  peliculas: Pelicula[] = [];

  constructor(private actores: ActoresService) {

    this.peliculas.push(new Pelicula("Lo que el viento se llevo", 238, 1939, "assets/images/films/loqueelvientosellevo.jpeg", "Francis Ford Coppola"))
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Calrk Gable"), "Rhett Butler ", "visitante de Charleston"));
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Vivien Leigh"), "Ashley Wilkes", "hijo"));
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Leslie Howard"), "Scarlett O'Hara", "hija"));
    this.peliculas[0].addPersonaje(new Personaje(actores.findByName("Olivia de Havilland"), "Melanie Hamilton", "prima"));

    this.peliculas.push(new Pelicula("El padrino", 177, 1972, "assets/images/films/elpadrino.jpeg", "Victor Fleming"))
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("Marlon Brando"), "Don Vito Corleone", "Padrino"));
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("Al Pacino"), "Michael Corleone", "Hijo menor del padrino"));
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("Robert Duvall"), "Thomas Hagen", "Consejero"));
    this.peliculas[1].addPersonaje(new Personaje(actores.findByName("James Caan"), "Santino Corleone", "Hijo mayor del padrino"));

    /*
    this.loQueElVientoSeLlevo= new Pelicula("Lo que el viento se llevo", 238, 1939);
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.clarkGabel, "Rhett Butler ", "visitante de Charleston"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.leslieHoward, "Ashley Wilkes", "hijo"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.vivienLeigh, "Scarlett O'Hara", "hija"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.oliviadehavillan, "Melanie Hamilton", "prima"));
    
    this.elPadrino= new Pelicula("El padrino", 177, 1972);
    this.elPadrino.addPersonaje( new Personaje(actores.marlonBrando, "Don Vito Corleone", "Padrino"));
    this.elPadrino.addPersonaje( new Personaje(actores.alPacino, "Michael Corleone", "Hijo menor del padrino"));
    this.elPadrino.addPersonaje( new Personaje(actores.robertDubball, "Thomas Hagen", "Consejero"));
    this.elPadrino.addPersonaje( new Personaje(actores.jamesCaan, "Santino Corleone", "Hijo mayor del padrino"));*/
  }

  getPeliculas() {
    return this.peliculas;
  }

  getPelicula(i: number) {
    return this.peliculas[i]
  }


}
