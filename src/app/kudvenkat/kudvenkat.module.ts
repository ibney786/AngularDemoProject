import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'

import { KudvenkatRoutingModule } from './kudvenkat-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    KudvenkatRoutingModule,
    AngularmaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KudvenkatModule { }
