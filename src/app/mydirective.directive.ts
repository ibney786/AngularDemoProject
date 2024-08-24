import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
  
})
export class MydirectiveDirective implements OnInit {

private  elementselected=true;
toggle='toggle'
  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor='yellow'
  }

  

  ngOnInit(): void {
  
    
    this.toggle=this.el.nativeElement.style.backgroundColor='yellow'
    this.onclick();
  }
  @HostListener('click')

  private onclick(){
    this.elementselected=!this.elementselected
    if(this.elementselected){
      this.el.nativeElement.classList.add(this.toggle)
    }
    else{
      this.el.nativeElement.classList.remove(this.toggle)
    }
  }

}
