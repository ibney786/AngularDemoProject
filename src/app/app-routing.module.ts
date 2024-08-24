import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologyComponent } from './technology/technology.component';
import { InformationComponent } from './information/information.component';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './Guards/auth.guard';
import { LogOutComponent } from './admin/log-out/log-out.component';
import { PipeComponent } from './Bootstrap/pipe/pipe.component';


const routes: Routes = [
  {path:"",component:SignInComponent},
  // {path:"About",component:AboutComponent},
 


  {path:"ContactUs",component:ContactusComponent},

  {path:"technology",component:TechnologyComponent},

  {path:"information",component:InformationComponent},

  {path:"courses",component:CoursesComponent},
  
  {path:"AdminModule",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"RxjsOperators",loadChildren:()=>import('./rxjs/rxjs.module').then(m=>m.RXJSModule)},
  {path:'Css',loadChildren:()=>import('./css/css.module').then(m=>m.CSSModule)},
  {path:'kudvenkat',loadChildren:()=>import('./kudvenkat/kudvenkat.module').then(m=>m.KudvenkatModule)},
  {path:'UImaterial',loadChildren:()=>import('./uimaterial/uimaterial.module').then(m=>m.UIMaterialModule)},
  { path:'angular6', loadChildren: () => import('./Angular_6/angular6/angular6.module').then(m => m.Angular6Module) },
  { path:'lifecycle', loadChildren: () => import('./LifeCycleHooks/lifecyclehoods.module').then(m => m.LifecyclehoodsModule) },
  
  
  {path:'myproject', loadChildren: () => import('./myproject/myproject.module').then(m=>m.MyprojectModule)},

  {path:'Ecommerce',loadChildren:()=>import('./EcommerSite/ecommerce.module').then(m=>m.EcommerceModule)},

{path:'shahosoft',loadChildren:()=>import('./ShahoSoftAngular/shahosoft.module').then(m=>m.ShahosoftModule)},

  {path:"About",component:LogOutComponent,

  canActivate:[AuthGuard]
  },
  { path: 'bootstrap', loadChildren: () => import('./Bootstrap/bootstrap.module').then(m => m.BootstrapModule)},

{path:'',component:SignInComponent,pathMatch:'full'},
 
  // {path:'',redirectTo:'login',pathMatch:'full'}
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
