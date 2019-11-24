import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopCrimesComponent} from './top-crimes.component';


const routes: Routes = [
  {path: 'top-crimes', component: TopCrimesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopCrimesRoutingModule { }
