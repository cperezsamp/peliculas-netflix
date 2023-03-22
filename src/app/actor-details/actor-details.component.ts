import { Component } from '@angular/core';
import { ActoresService } from '../actores.service';
import { Actor } from '../models/actor';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent {
  actor: Actor[];

  constructor(private actoresService: ActoresService) {
    this.actor = actoresService.actores;
  }
}
