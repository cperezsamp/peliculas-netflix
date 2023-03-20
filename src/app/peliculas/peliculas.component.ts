import { Component } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas: Pelicula[];
  //actores: Actor;

  constructor(private peliculasService: PeliculasService) {
    this.peliculas= peliculasService.peliculas;
  }

 /* ngOnInit() {
    this.pelicula = this.peliculasService.getPelicula(0)
    this.actores = this.pelicula.personajes
  }*/

}
