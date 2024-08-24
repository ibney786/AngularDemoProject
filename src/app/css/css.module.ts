import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSSRoutingModule } from './css-routing.module';
import { CssdashComponent } from './cssdash/cssdash.component';
import { ListComponent } from './list/list.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorsComponent } from './validators/validators.component';


@NgModule({
  declarations: [
    CssdashComponent,
    ListComponent,
    ValidatorsComponent
  ],
  imports: [
    CommonModule,
    CSSRoutingModule,AngularmaterialModule,
    ReactiveFormsModule
  ]
})
export class CSSModule { }
