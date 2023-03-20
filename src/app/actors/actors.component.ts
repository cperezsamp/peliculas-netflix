import { Component, OnInit, Input } from '@angular/core';
import { ActoresService } from '../actores.service';
import { Personaje } from '../models/personaje';


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  @Input() personaje: Personaje;

  constructor(private actoresService: ActoresService) {
  }
  
  ngOnInit() {
    
  }
}
