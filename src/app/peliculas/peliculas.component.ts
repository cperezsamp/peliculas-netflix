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

  constructor(private peliculasService: PeliculasService) {
    this.peliculas = peliculasService.peliculas;
  }

  ngOnInit() {
  }

}
