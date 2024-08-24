import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { BadgeIconComponent } from './badge-icon/badge-icon.component';
import { TableComponent } from './table/table.component';
import { TabStepperComponent } from './tab-stepper/tab-stepper.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,
children:[
  {path:'list' ,component:ListdemoComponent},
  {path:'IconBadge',component:BadgeIconComponent},
  {path:'table',component:TableComponent},
  {path:'tabStepper',component:TabStepperComponent},
  
]
},
  // {path:'list',component:ListdemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIMaterialRoutingModule { }
