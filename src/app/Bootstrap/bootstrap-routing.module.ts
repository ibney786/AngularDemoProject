import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: 'bootHome', component: BootstrapComponent },
  {path:'pipe',component:PipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }
