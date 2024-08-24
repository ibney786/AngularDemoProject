import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { user } from 'src/app/model/user';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit{
  loggedInUser ={} as user

 

  constructor(private authservice:AuthService, private route:Router){

  }
  ngOnInit(): void {
   this.loggedInUser=this.authservice.getLogedInUser();
    
  }

  logout(){
    this.authservice.getLogedOut();
    this.route.navigate(['AdminModule/Admin'])

  }

}
