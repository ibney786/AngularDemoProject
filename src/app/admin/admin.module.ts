import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogOutComponent } from './log-out/log-out.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { AboutComponent } from '../about/about.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    LogOutComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ]
})
export class AdminModule { }
