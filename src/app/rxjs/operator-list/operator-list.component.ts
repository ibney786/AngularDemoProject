import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css'],
  
})
export class OperatorListComponent implements OnInit{
  constructor(private route:Router){

  }

  ngOnInit(){

  }

  showTake(){
    this.route.navigate(['RxjsOperators/take'])
  }
  showArray():void{
    this.route.navigate(['RxjsOperators/arrayprogram'])
  }

  Subject(){
    this.route.navigate(['RxjsOperators/sub&Behaviorsub'])
  }

  hostlistener(){
    this.route.navigate(['RxjsOperators/hostlistener'])
  }

  skipUntill(){
    this.route.navigate(['RxjsOperators/skipUntill'])
  }
  map(){
    this.route.navigate(['RxjsOperators/map'])
  }

}
