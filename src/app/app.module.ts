import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActoresService} from './actores.service';
import { PeliculasService } from './peliculas.service';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ActoresService,
    PeliculasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
