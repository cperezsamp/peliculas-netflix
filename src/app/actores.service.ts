import { Injectable } from '@angular/core';
import { Actor } from './models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {


  actores: Actor[] = [];

  constructor() {

    this.actores.push(new Actor(1, "Clark Gable", 59, "clip.mp4", "estadounidense", false, "assets/images/actors/clarkgable.jpeg", "William Clark Gable fue un actor estadounidense, considerado uno de los actores más notorios del cine clásico de Hollywood.​Su momento de esplendor fueron los años 30, desde los taquillazos de Los seis misteriosos o Un alma libre. Gable ganó un Óscar al mejor actor principal por Sucedió una noche, película de 1934"));
    this.actores.push(new Actor(2, "Vivien Leigh", 53, "clip2.mp4", "britanica", false, "assets/images/actors/vivienleight.jpeg", "Vivian Mary Hartley, conocida artísticamente como Vivien Leigh, fue una actriz de teatro y cine británica."));
    this.actores.push(new Actor(3, "Leslie Howard", 50, "clip3.mp4", "britanica", false, "assets/images/actors/lesliHoward.jpeg","Leslie Howard Stainer, conocido como Leslie Howard, fue un actor inglés de teatro y cine."));
    this.actores.push(new Actor(4, "Olivia de Havilland", 104, "clip4.mp4", "estadounidense", false, "assets/images/actors/oliviadehavillan.jpeg","Olivia Mary de Havilland ​​ fue una actriz británico-estadounidense, ganadora de dos premios Óscar a mejor actriz protagonista por La vida íntima de Julia Norris y La heredera, siendo una de las estrellas de Hollywood más célebres de la década de 1940 y de la historia del cine."));
    this.actores.push(new Actor(5, "Marlon Brando", 80, "clip.mp4", "estadounidense", false, "assets/images/actors/marlonbrando.jpeg","Marlon Brando Jr. fue un actor estadounidense de cine y teatro. Su formación e instrucción teatral fue llevada a cabo por Stella Adler, una de las más prestigiosas profesoras que desarrollaron el trabajo de Stanislavski en Nueva York; algunos sábados acudía al Actor's Studio interesado en las clases de Elia Kazan."));
    this.actores.push(new Actor(6, "Al Pacino", 82, "clip2.mp4", "estadounidense", true, "assets/images/actors/alpacino.jpeg","Alfredo James Pacino, conocido como Al Pacino, es un actor de cine, teatro y televisión estadounidense, habiéndose desempeñado ocasionalmente como guionista, director y productor."));
    this.actores.push(new Actor(7, "Robert Duvall", 92, "clip3.mp4", "estadounidense", true, "assets/images/actors/roberduvall.jpeg","Robert Duvall es un actor y director de cine estadounidense, ganador de un Premio Óscar al mejor actor en 1984, el premio BAFTA, un Premio Emmy y cuatro premios Globo de Oro, además de otros importantes premios. Se le considera como uno de los mejores actores vivos de Hollywood."));
    this.actores.push(new Actor(8, "James Caan", 82, "clip4.mp4", "estadounidense", false, "assets/images/actors/jamescaan.jpeg","James Edmund Caan ​fue un actor estadounidense, conocido por papeles como Sonny Corleone en El padrino, Paul Sheldon en Misery y Ed Deline en la serie de televisión Las Vegas. Durante su carrera fue nominado a los premios Óscar, Emmy y Globos de Oro por sus actuaciones. "));
    this.actores.push(new Actor(9, "Tom Cruise", 60, "clip.mp4", "estadounidense", true, "assets/images/actors/tomcruise.jpeg","Thomas Cruise Mapother IV, más conocido como Tom Cruise, es un actor y productor de cine estadounidense ganador de tres premios Globo de Oro, un Premio Saturn y una Palma de Oro honoraria."));
    this.actores.push(new Actor(10, "Miles Teller", 36, "clip2.mp4", "estadounidense", true, "assets/images/actors/milesteller.jpeg","Miles Alexander Teller es un actor estadounidense. Desde joven, mostró interés por la música y el baloncesto, pero finalmente decidió enfocarse en la actuación y se graduó de Bellas artes en la Tisch School of the Arts, perteneciente a la Universidad de Nueva York."));
    this.actores.push(new Actor(11, "Jon Hamm", 52, "clip3.mp4", "estadounidense", true, "assets/images/actors/jonhamm.jpeg","Jonathan Daniel Hamm, más conocido como Jon Hamm, es un actor estadounidense especialmente popular por su papel del publicista Don Draper en la serie Mad Men, por el que ganó el Globo de Oro al mejor actor en una serie dramática en 2008 y en 2016, así como un Emmy en 2015."));
    this.actores.push(new Actor(12, "Jennifer Connelly", 52, "clip4.mp4", "estadounidense", true, "assets/images/actors/jenniferconnelly.jpeg","Jennifer Lynn Connelly es una actriz y modelo estadounidense. Comenzó su carrera como modelo infantil antes de debutar en la actuación en el filme de Sergio Leone Érase una vez en América."));

  }

  findByName(name: string): Actor {
    return this.actores.find(element => element.nombre === name) as Actor
  }

  //esto no devuelve nada
  findOneById(id: number): Actor {
    /*for(let i= 0; i<this.actores.length;i++){
      if(this.actores[i].id=== id){
        return this.actores[i];
      }
    }
    return null as Actor;*/

    console.log(id);
    console.log(this.actores.find(element => element.id === id) as Actor);
    return this.actores.find(element => element.id == id) as Actor;
  }

}
