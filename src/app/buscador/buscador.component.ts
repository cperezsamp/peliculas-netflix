import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})


export class BuscadorComponent {



  desplegable: boolean;
  nombreActor: string;
  edadMinima: number;
  edadMaxima: number;
  nacionalidad: string;
  isAlive: string;

  constructor(){
    this.desplegable= false;
    this.nombreActor= "";
    this.edadMinima= 0;
    this.edadMaxima= 150;
    this.nacionalidad= "";
    this.isAlive= "";
  }

  changeDesplegable(){
    if(this.desplegable){
      this.desplegable= false;
    }
    else{
      this.desplegable= true;
    }
  }

}
