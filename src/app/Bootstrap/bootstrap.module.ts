import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootstrapRoutingModule } from './bootstrap-routing.module';



@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
