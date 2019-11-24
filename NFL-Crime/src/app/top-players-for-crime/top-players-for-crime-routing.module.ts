import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopPlayersForCrimeComponent} from './top-players-for-crime.component';


const routes: Routes = [
  {path: 'top-players/:id', component: TopPlayersForCrimeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopPlayersForCrimeRoutingModule { }
