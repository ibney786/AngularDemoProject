import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Angular6RoutingModule } from './angular6-routing.module';
import { Angular6Component } from './angular6.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Angular6Component
  ],
  imports: [
    CommonModule,
    Angular6RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Angular6Module { }
