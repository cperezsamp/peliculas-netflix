import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})



export class PlayerComponent {
  
  @Input() video: string;
  ruta: string= "../assests/media/";
  urlVideo: string;

  constructor(){
    this.urlVideo= this.ruta + this.video;
  }

  ngOnInit(){
    
  }

}
