import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular6Component } from './angular6.component';

const routes: Routes = [
  { path: 'emp', component: Angular6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular6RoutingModule { }
