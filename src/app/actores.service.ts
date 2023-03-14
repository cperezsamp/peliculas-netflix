import { Injectable } from '@angular/core';
import {Actor} from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  clarkGabel: Actor;
  vivienLeigh: Actor;
  leslieHoward: Actor;
  oliviadehavillan: Actor;

  marlonBrando: Actor;
  alPacino: Actor;
  robertDubball: Actor;
  jamesCaan: Actor;

  constructor() { 
    this.clarkGabel= new Actor("Calrk Gable", 59, "", "estadounidense", false, "");
    this.vivienLeigh= new Actor("Vivien Leigh", 53, "", "britanica", false, "");
    this.leslieHoward= new Actor("Leslie Howard", 50, "", "britanica", false, "");
    this.oliviadehavillan= new Actor("Olivia de Havilland", 104, "", "estadounidense", false, "");

    this.marlonBrando= new Actor("Marlon Brando", 80, "", "estadounidense", false, "");
    this.alPacino= new Actor("Al Pacino", 82, "", "estadounidense", true, "");
    this.robertDubball= new Actor("Robert Duvall", 92, "", "estadounidense", true, "");
    this.jamesCaan= new Actor("James Caan", 82, "", "estadounidense", false, "");
  }
}
