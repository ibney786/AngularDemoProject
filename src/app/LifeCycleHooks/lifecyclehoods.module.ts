import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { LifecyclehoodsRoutingModule } from './lifecyclehook.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';



@NgModule({
  declarations: [
    ParentComponent, ChildComponent,GrandchildComponent,AddUserComponent,UserdetailsComponent
  
  ],
  imports: [
    CommonModule,
    LifecyclehoodsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ]
})
export class LifecyclehoodsModule { }
