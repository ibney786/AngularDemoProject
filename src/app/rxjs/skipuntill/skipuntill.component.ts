import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skipuntill',
  templateUrl: './skipuntill.component.html',
  styleUrls: ['./skipuntill.component.css']
})
export class SkipuntillComponent implements OnInit,OnDestroy {

  switchOn$:Subject<any>=new Subject<any>();
  counter:number=0;
  constructor(private route:Router){}

  ngOnInit(): void {
    
    const source$=interval(1000);
    source$.pipe(skipUntil(this.switchOn$)).subscribe(count=>{
      
      this.counter=count;
    })
  }
  
  on(){
  
    this.switchOn$.next("")
  }

  // @HostListener("mouseover")
  // onMouseOver(){
  //   this.switchOn$.next("");
  // }

 
  
  ngOnDestroy(): void {
    this.switchOn$.next(this.counter);
  }

back(){
  this.route.navigate(['RxjsOperators/operatorsList'])
}


}
