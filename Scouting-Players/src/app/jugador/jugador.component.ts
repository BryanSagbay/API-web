import { Component, OnInit } from '@angular/core';
import { Jugadores } from '../model/jugador';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugador: Jugadores= new Jugadores();
  bandera: boolean=false;
  jugadores: Jugadores[] = [];
constructor(private jugadorService:JugadorService){

}
ngOnInit(){
this.jugadorService.jugadores().subscribe( (data:Jugadores[]) => {
 this.jugadores = data
})
this.jugador=new Jugadores();
}
MostrarDatos(){
  if(this.bandera==false){
  this.jugadorService.jugadores().subscribe( (data:Jugadores[]) => {
    this.jugadores = data
  })
  this.jugador=new Jugadores();
}}


guardarJugador() {
  if (this.bandera == false) {
    this.jugadorService.guardarJugador(this.jugador).subscribe( (data:Jugadores) => {
      this.jugadores.push(data)
      this.jugador = new Jugadores();
    });


  } else {


    this.jugadorService.actualizarJugador(this.jugador).subscribe( (data:Jugadores) => {
      this.jugadores.push(data)
      this.bandera = false

    });
    this.jugador = new Jugadores();
  }

 }

 eliminarJugador(jugador: Jugadores) {
  this.jugadorService.eliminarJugador(jugador.id).subscribe( (data:Jugadores) => {
    this.jugadores = this.jugadores.filter(j => j !== jugador)
  });
 }

  modificarJugador(j:Jugadores){
    this.jugador = j
    this.bandera= true
  }

}

