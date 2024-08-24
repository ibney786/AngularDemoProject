import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
opened=false;
constructor(private route:Router,private activeRoute:ActivatedRoute){

}
toggle(){
  this.opened =!this.opened
}

list(){
this.route.navigate(['list'],{relativeTo:this.activeRoute})
}

iconBadge(){
  this.route.navigate(['IconBadge'],{relativeTo:this.activeRoute})
}

showTable(){
  this.route.navigate(['table'],{relativeTo:this.activeRoute})
}
stepper(){
  this.route.navigate(['tabStepper'],{relativeTo:this.activeRoute})
}
}
