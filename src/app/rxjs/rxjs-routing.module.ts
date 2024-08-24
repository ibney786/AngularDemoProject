import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeComponent } from './take/take.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { ArrayProgramComponent } from './array-program/array-program.component';
import { SubjectOperatorComponent } from './subject-operator/subject-operator.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { SkipuntillComponent } from './skipuntill/skipuntill.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'take',component:TakeComponent},
  {path:'arrayprogram', component:ArrayProgramComponent},
  {path:'operatorsList',component:OperatorListComponent},
  {path:'sub&Behaviorsub',component:SubjectOperatorComponent},
  {path:'hostlistener',component:HostlistenerComponent},
  {path:'skipUntill',component:SkipuntillComponent},
  {path:'map',component:MapComponent},
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RXJSRoutingModule { }
