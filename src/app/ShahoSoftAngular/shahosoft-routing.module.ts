import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from '../LifeCycleHooks/child/child.component';

const routes: Routes = [
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShahosoftRoutingModule { }
