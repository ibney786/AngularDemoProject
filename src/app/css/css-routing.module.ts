import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssdashComponent } from './cssdash/cssdash.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'Deshboard',component:CssdashComponent},
  {path:'list',component:ListComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSSRoutingModule { }
