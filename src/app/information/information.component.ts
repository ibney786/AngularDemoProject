import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  title="property binding"
  isdisable=true;
  clickcount=0;
  name=""
  closeLabel="close";
  @ViewChild('templateForm') templateform:any

  constructor(){}
  ngOnInit(): void {
  }
  
  getvalue():void{
    console.log(this.templateform.value);debugger
    alert(`use the @viewchild() for reference variable:- ${this.templateform.value.name} 
    ${this.templateform.value.email}  ${this.templateform.value.address}`)

   console.log(this.templateform.control.get("name").dirty);
   this.templateform.control.get("name").disable()


  }
enabled(){
  this.templateform.control.get("name").enable()
}

  closeMe(){
    alert("closed")
  }

  clickme(){
    this.clickcount++
  }
}
