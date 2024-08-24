import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyprojectRoutingModule } from './myproject-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';

console.log("add user loaded along with the myproject")
@NgModule({
  declarations: [
    AddUserComponent,
    HeaderComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MyprojectRoutingModule,
    AngularmaterialModule,
    ReactiveFormsModule
  ]
})
export class MyprojectModule { }
