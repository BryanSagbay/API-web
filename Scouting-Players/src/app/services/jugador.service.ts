import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugadores } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  /* URL DONDE SE ENCUENTRA LA API*/
  private urlEndPoint: string = 'http://localhost:8080/api';
  /*CONSTRUCTRO DE HTTP*/
  constructor(private http: HttpClient) {}
  /*OBTIENE LOS DATOS DEL API MEDIANTE UN GET */
  jugadores(): Observable<Jugadores[]> {
    return this.http.get<Jugadores[]>(`${this.urlEndPoint}/jugadores`);
  }


    //consumn post Api
    guardarJugador(jugador: Jugadores): Observable<Jugadores>{
    return this.http.post<Jugadores>(`${this.urlEndPoint}/guardarjugador`, jugador);
    }
    //udapte Api
    actualizarJugador(jugador: Jugadores): Observable<Jugadores> {
      return this.http.put<Jugadores>(`${this.urlEndPoint}/actualizarjugador`, jugador)
    }
    //consume delete api
    eliminarJugador(id: number): Observable<Jugadores> {
    return this.http.delete<Jugadores>(`${this.urlEndPoint}/eliminarjugador/${id}`)
  }

}
