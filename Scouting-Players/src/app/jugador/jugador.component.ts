import { Component, OnInit } from '@angular/core';
import { Jugador } from '../model/jugador';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponentn implements OnInit {
    jugador: Jugador= new Jugador();
    bandera: boolean=false;
    jugadores: Jugador[] = [];
 constructor(private jugadorService:JugadorService){

 }
 ngOnInit(){
 this.jugadorService.jugadores().subscribe( (data:Jugador[]) => {
   this.jugadores = data
 })
 this.jugador=new Jugador();
 }
 guardarJugador() {
  //guardar jugador
   if (this.bandera == false) {
     this.jugadorService.guardarJugador(this.jugador).subscribe( (data:Jugador) => {
       this.jugadores.push(data)
       this.jugador = new Jugador();
     });


   } else {

     //actualizar jugador
     this.jugadorService.actualizarJugador(this.jugador).subscribe( (data:Jugador) => {
       this.jugadores.push(data)
       this.bandera = false

     });
     this.jugador = new Jugador();
   }

 }
//eliminar jugador
 eliminarJugador(jugador: Jugador) {
   this.jugadorService.eliminarJugador(jugador.id).subscribe( (data:Jugador) => {
     this.jugadores = this.jugadores.filter(j => j !== jugador)
   });
 }
// editar jugador
   modificarJugador(j:Jugador){
     this.jugador = j
     this.bandera= true
   }
}
