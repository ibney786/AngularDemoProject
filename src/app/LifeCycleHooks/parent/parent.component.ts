import { AfterContentChecked, AfterContentInit, AfterViewChecked,
   AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit,
    SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck,AfterContentInit
,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  message:string='hello ibney';
  content:string='hi hasan';
  hidechild=true;
  constructor(){
    console.log("ParentComponent:-constructor")
  }

  toggle(){
    this.hidechild=!this.hidechild
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ParentComponent:-onchanges")
  }
  
  ngOnInit(): void {
   console.log("ParentComponent:-onInit")
  }

  ngDoCheck(): void {
    console.log("ParentComponent:-Docheck")
  }

  ngAfterContentInit(): void {
   console.log("ParentComponent:-AfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ParentComponent:-AfterContentChecked")

  }

  ngAfterViewInit(): void {
   console.log("ParentComponent:-AfterViewInit") 
  }
  
  ngAfterViewChecked(): void {
    console.log("ParentComponent:-AfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("ParentComponent:-OnDestroy")
  }

}
