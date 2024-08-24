import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MydirectiveDirective } from './mydirective.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologyComponent } from './technology/technology.component';
import { InformationComponent } from './information/information.component';
// import { CoursesComponent } from './courses/courses.component';
import {ServiceDataService} from './service-data.service'
import { AuthGuard } from './Guards/auth.guard';
import { AuthService } from './Services/auth.service';
import { PostdataComponent } from './postdata/postdata.component';
import { HttpClientModule } from '@angular/common/http';
import { passwordConfirmDirective } from './shared/passwordConfirm.directive';
import { DemoPComponent } from './demo-p/demo-p.component';
// import { SearchPipe } from './Pipes/search.pipe';







// import { LoginComponent } from './SignUp_Module/login/login.component';



@NgModule({
  declarations: [
    // SearchPipe,
    AppComponent,
    SignInComponent,
    HeaderComponent,
    PagenotfoundComponent,
    MydirectiveDirective,
    passwordConfirmDirective,
    // AboutComponent,
    // ContactusComponent,
    // TechnologyComponent,
    InformationComponent,
    PostdataComponent,
    DemoPComponent,
 
     
    
  
  
    // LoginComponent,
    // CoursesComponent
  ],
  // entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],

  providers: [
    // SearchPipe,
    ServiceDataService,
    AuthService,
  AuthGuard,
  
  {provide:HTTP_INTERCEPTORS,
  useClass:LoggingInterceptor,
   multi:true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
