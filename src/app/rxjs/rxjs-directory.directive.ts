import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import{TakeComponent}from 'src/app/rxjs/take/take.component'

@Directive({
  selector: '[appRxjsDirectory]'
})
export class RxjsDirectoryDirective implements OnInit {

  @HostBinding('style.border') border:any

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor='yellow'
   }

  ngOnInit(): void {
    this.border="2px solid blue"
  }

 


}


