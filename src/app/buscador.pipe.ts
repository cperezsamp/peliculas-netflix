import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActoresService } from './actores.service';
import { Actor } from './models/actor';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  filteredActors :Actor[];

  constructor(private actoresService: ActoresService, private route:ActivatedRoute, private router:Router){
    actoresService.actores;
  }


  transform(value: any, ...args: any[]): any {
    
    
    const result = [];
    console.log(args[3]);
    for(let actor of value){
      if(actor.nombre.includes(args[0]) && (actor.edad > args[1]  && actor.edad < args[2]) && actor.nacionalidad.includes(args[3])){
        result.push(actor);
      }
    }
    return result;
    
    
    //realizar la redireccion tras las busqueda
    //this.router.navigate(['/findActor']);

    //cerar 3 if para controlar los valores que el usuario a usado del filtrador
    /*for(let i= 1; i < this.actoresService.actores.length; i++){
      if(this.actoresService.actores[i].nombre.includes(value)){
        this.filteredActors.push(this.actoresService.actores[i])
      }
    }*/
    return this.filteredActors;
    //return (this.actoresService.findByName(value)).nombre;
    
      

    //habra que comunicar el componente DetailedActor con el componente buscador de modo que Detailed pueda acceder a las variables de buscador, Detailed tendra el 
    //pipe buscador le pasara los valores y argumentos.
   
    //return "hola";
  }

}
