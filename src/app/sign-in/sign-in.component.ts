import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { range } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
  
})
export class SignInComponent implements OnInit {
  source=range(1,7);
  signInform:FormGroup;
  hide=true;
  condition=true;
  red='red'
  size20='size20';
  green='green';size30='size30';

  todate:Date=new Date();
  msg:string='wel come to angular tutorials'
  cur:number=170;
  ibneyhasan:string='ibney'


  constructor(private fb:FormBuilder){
    this.signInform =fb.group({
      UserName:new FormControl(""),
      password:new FormControl("")
    })
    
   }




   @HostBinding('style.color') textcolor:any;
   stylechange(){
   
   } 

   @HostListener('click')
   onclick(){
    this.textcolor="red"
   }


   @HostListener('mouseover')
   onMouseover(){
    this.textcolor="green";
   }

   @HostListener('mouseout')
   onMouseout(){
    this.textcolor="blue";
   }

myobserver={
  next :(x:any )=>console.log("value of x:-"+x),
  error:(err:any)=> console.log(err),
  complete:()=>console.log("conut completed")
}

ngOnInit(): void {
  // this.formContrpls();
  
  this.source.subscribe(this.myobserver)

}


formContrpls(){
this.signInform =this.fb.group({
  UserName:new FormControl(""),
  password:new FormControl("")
})

}

onSubmit(el:any){
  
  console.log("form value:=>  "+el.value.UserName)
  alert(el.value.UserName)
}


showdata(event:any){
  console.log("button is clicked !")
  if(event)
  {
    console.log(event.target.type);
  }
}
}
