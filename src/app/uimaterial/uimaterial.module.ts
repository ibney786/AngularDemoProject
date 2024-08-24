import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIMaterialRoutingModule } from './uimaterial-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { MatDailogComponent } from './mat-dailog/mat-dailog.component';
import { BadgeIconComponent } from './badge-icon/badge-icon.component';
import { TabStepperComponent } from './tab-stepper/tab-stepper.component';
import { TableComponent } from './table/table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    DashboardComponent,
    ListdemoComponent,
    MatDailogComponent,
    BadgeIconComponent,
    TabStepperComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    UIMaterialRoutingModule,
    AngularmaterialModule,
    ScrollingModule
  ]
})
export class UIMaterialModule { }
