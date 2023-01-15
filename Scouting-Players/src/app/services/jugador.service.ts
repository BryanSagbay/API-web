import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private urlEndPoint: string ="http://localhost:8080/api";

  constructor(private http: HttpClient) { }

    jugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(
      `${this.urlEndPoint}/jugadores`
    );
    }

    //consumn post Api
    guardarJugador(jugador: Jugador): Observable<Jugador>{
    return this.http.post<Jugador>(`${this.urlEndPoint}/guardarjugador`, jugador);
    }
    //udapte Api
    actualizarJugador(jugador: Jugador): Observable<Jugador> {
      return this.http.put<Jugador>(`${this.urlEndPoint}/actualizarjugador`, jugador)
    }
    //consume delete api
    eliminarJugador(id: number): Observable<Jugador> {
    return this.http.delete<Jugador>(`${this.urlEndPoint}/eliminarjugador/${id}`)
  }
}
