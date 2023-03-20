import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActoresService } from './actores.service';
import { PeliculasService } from './peliculas.service';
import { PlayerComponent } from './player/player.component';
import { BuscadorPipe } from './buscador.pipe';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BuscadorPipe,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ActoresService,
    PeliculasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
