import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  @Input() actores: any = []
  constructor(private peliculasService: PeliculasService) {
  }

  ngOnInit() {
    this.actores = this.peliculasService.getPersonajes(0)
  }
}
