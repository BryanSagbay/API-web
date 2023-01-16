import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubesComponent } from './clubes/clubes.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugadorComponent } from './jugador/jugador.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'jugador', component: JugadorComponent },
  {path: 'clubes', component: ClubesComponent},
  {path: '**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
