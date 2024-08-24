import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  invalidCredentialMsg ='';
constructor(private authservice:AuthService,private route:Router){

}

loginForm=new FormGroup({
  userName:new FormControl(),
  password:new FormControl()
})

reset(){
  this.loginForm.reset();
  this.invalidCredentialMsg='';
  // this.loginForm.get('userName')?.setValue('');
  // this.loginForm.get('password')?.setValue('');
}

onFormSubmit(){
let uname=this.loginForm.get('userName')?.value;
let pwd=this.loginForm.get('password')?.value;

this.authservice.isUserAuthenticated(uname,pwd).subscribe(res=>{
  if(res){
    let url =this.authservice.getRedirectUrl();
    console.log('redirect url',url);
    this.route.navigate([url]);
  }
  else{
    this.invalidCredentialMsg="Invalide credential ! please try again."
  }
})
}
}
