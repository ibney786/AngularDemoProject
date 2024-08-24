import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RXJSRoutingModule } from './rxjs-routing.module';
import { TakeComponent } from './take/take.component';
import { SubjectOperatorComponent } from './subject-operator/subject-operator.component';
import {CoursesComponent} from '../courses/courses.component'
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { ArrayProgramComponent } from './array-program/array-program.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { TechnologyComponent } from '../technology/technology.component';
import { MydirectiveDirective } from '../mydirective.directive';
import { RxjsDirectoryDirective } from './rxjs-directory.directive';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { SkipuntillComponent } from './skipuntill/skipuntill.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    TakeComponent,
    SubjectOperatorComponent,CoursesComponent,ContactusComponent, TechnologyComponent,OperatorListComponent, ArrayProgramComponent, RxjsDirectoryDirective, HostlistenerComponent, SkipuntillComponent, MapComponent,
  ],
  imports: [
    CommonModule,
    RXJSRoutingModule,
    AngularmaterialModule
  ]
})
export class RXJSModule { }
