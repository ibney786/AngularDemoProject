import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-icon',
  templateUrl: './badge-icon.component.html',
  styleUrls: ['./badge-icon.component.css']
})
export class BadgeIconComponent {
countNumber:number=10;
countzero:number=0;
count:number=9;
matspinner=false;
  constructor(){

}

loadSpinner(){
  this.matspinner=true;
  setTimeout(() => {
    this.matspinner=false;
    alert("date loaded now")
  }, 5000);
}
}
