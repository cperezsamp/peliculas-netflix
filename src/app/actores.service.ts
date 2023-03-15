import { Injectable } from '@angular/core';
import {Actor} from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  /*clarkGabel: Actor;
  vivienLeigh: Actor;
  leslieHoward: Actor;
  oliviadehavillan: Actor;

  marlonBrando: Actor;
  alPacino: Actor;
  robertDubball: Actor;
  jamesCaan: Actor;*/

  actores: Actor[]=[];

  constructor() { 

    this.actores.push(new Actor("Calrk Gable", 59, "clip.mp4", "estadounidense", false, "clarkgable.jpeg"));
    this.actores.push(new Actor("Vivien Leigh", 53, "clip.mp4", "britanica", false, "vivienleight.jpeg"));
    this.actores.push(new Actor("Leslie Howard", 50, "clip.mp4", "britanica", false, "lesliHoward.jpeg"));
    this.actores.push(new Actor("Olivia de Havilland", 104, "clip.mp4", "estadounidense", false, "oliviadehavilland.jpeg"));
    this.actores.push(new Actor("Marlon Brando", 80, "clip.mp4", "estadounidense", false, "marlonbrando.jpeg"));
    this.actores.push(new Actor("Al Pacino", 82, "clip.mp4", "estadounidense", true, "alpacino.jpeg"));
    this.actores.push(new Actor("Robert Duvall", 92, "clip.mp4", "estadounidense", true, "robertduvall.jpeg"));
    this.actores.push(new Actor("James Caan", 82, "clip.mp4", "estadounidense", false, "jamescaan.jpeg"));
    
    //this.clarkGabel= new Actor("Clark Gable", 59, "", "estadounidense", false, "");
    //this.vivienLeigh= new Actor("Vivien Leigh", 53, "", "britanica", false, "");
    //this.leslieHoward= new Actor("Leslie Howard", 50, "", "britanica", false, "");
    //this.oliviadehavillan= new Actor("Olivia de Havilland", 104, "", "estadounidense", false, "");

    //this.marlonBrando= new Actor("Marlon Brando", 80, "", "estadounidense", false, "");
    //this.alPacino= new Actor("Al Pacino", 82, "", "estadounidense", true, "");
    //this.robertDubball= new Actor("Robert Duvall", 92, "", "estadounidense", true, "");
    //this.jamesCaan= new Actor("James Caan", 82, "", "estadounidense", false, "");
  }

  findByName(name: string): Actor{
    return this.actores.find(element => element.nombre === name) as Actor
  }
}
