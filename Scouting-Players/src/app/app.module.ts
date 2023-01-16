import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ClubesComponent } from './clubes/clubes.component';
import { AgregarJugadorComponent } from './agregar-jugador/agregar-jugador.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    InicioComponent,
    ClubesComponent,
    AgregarJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

