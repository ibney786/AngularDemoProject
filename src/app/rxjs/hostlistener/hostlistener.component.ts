import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent {

  constructor(private route:Router){}
@HostListener("click",['$event'])
displayClick(){
  alert("you clicked")
}

@HostBinding('style.color') toggle:any;

@HostListener('mouseover')
onMouseOver1(){
  this.toggle="blue"
 }
   @HostListener('mouseleave')
   onMouseOver(){
    this.toggle="green"
   }

   
back(){
  this.route.navigate(['RxjsOperators/operatorsList'])
}

}
