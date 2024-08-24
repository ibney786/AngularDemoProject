import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {interval, take} from 'rxjs'
@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  count:number=0;
constructor(private route:Router){}
  ngOnInit(): void {
   
    const source$=interval(1000);

    source$.pipe(take(6)).subscribe(count=>{
      console.log(count)
      this.count=count
    })
    
  }



back(){
  this.route.navigate(['RxjsOperators/operatorsList'])
}
}
