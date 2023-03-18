import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //redireccion a DetailedActor para mostrar las coincidencias.

    //cerar 3 if para controlar los valores que el usuario a usado del filtrador

    //habra que comunicar el componente DetailedActor con el componente buscador de modo que Detailed pueda acceder a las variables de buscador, Detailed tendra el 
    //pipe buscador le pasara los valores y argumentos.
   
    return args[3];
  }

}
