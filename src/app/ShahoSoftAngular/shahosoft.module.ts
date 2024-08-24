import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShahosoftRoutingModule } from './shahosoft-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ShahosoftRoutingModule
  ]
})
export class ShahosoftModule { }
