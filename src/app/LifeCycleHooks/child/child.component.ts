import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { customer } from '../Customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked
,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() message:any

  customer:customer=new customer()

   mystyle='green';
  constructor(){
    console.log("ChildComponent:-constructor")
  }
  ngOnDestroy(): void {
   console.log("ChildComponent:-ondestroy")
  }
  ngAfterViewChecked(): void {
   console.log("ChildComponent:-afterviewchecked")
  }
  ngAfterViewInit(): void {
    console.log("ChildComponent:-afterviewinit")
  }
  ngAfterContentChecked(): void {
    console.log("ChildComponent:-aftercontentchecked")
  }
  ngAfterContentInit(): void {
    console.log("ChildComponent:-aftercontentinit")
  }
  ngDoCheck(): void {
  console.log("ChildComponent:-docheck")
  }
  ngOnInit(): void {
    console.log("ChildComponent:-oninit")
  }
  ngOnChanges(changes: any): void {
   console.log("ChildComponent:-onchange")
   alert("on change life cycle hook in child:-  "+changes.message.currentValue)
  }

}
