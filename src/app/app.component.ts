import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peliculas-netflix';
  pelicula: any;
  actores: any;

  constructor(private peliculasService: PeliculasService) {
  }

  ngOnInit() {
    this.pelicula = this.peliculasService.getPelicula(0)
    this.actores = this.pelicula.personajes
    console.log('this.actores', this.actores)
  }

}