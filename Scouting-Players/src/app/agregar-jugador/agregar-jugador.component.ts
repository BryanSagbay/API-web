import { Component, OnInit } from '@angular/core';
import { Jugadores } from '../model/jugador';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.css'],

})
export class AgregarJugadorComponent implements OnInit {
  jugador: Jugadores= new Jugadores();
  bandera: boolean=false;
  alerta: boolean=false;
  jugadores: Jugadores[] = [];
constructor(
  private jugadorService:JugadorService
  ){

}
ngOnInit():void{
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
/*
alert(){
  if(this.alerta== false){
  }if(this.alerta==true)
  alert('Seguro de eliminar')
}*/

onSelect(jugador:Jugadores):void{
  this.jugador=jugador;
 }

actualizar():void{
  window.location.reload();
}

}

