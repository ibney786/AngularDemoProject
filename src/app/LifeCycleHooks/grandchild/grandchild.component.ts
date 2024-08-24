import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { customer } from '../Customer';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked
,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()customer:customer=new customer

  studentArr:any[]=[
    { 'id':1,name:'ibney' ,ngclass:'use the ngclasses'},  
      { 'id':2,name:'hasan',ngclass:' Not use the ngclasses'}, 
       { 'id':3,name:'khan',ngclass:' Not use the ngclasses'},
         { 'id':4,name:'noor',ngclass:' Not use the ngclasses'},
           { 'id':5,name:'rohit',ngclass:' Not use the ngclasses'},  
             { 'id':6,name:'manoj',ngclass:' Not use the ngclasses'}
  ]

  constructor(private fb:FormBuilder){
    console.log("GrandChild:-constructor")
  }


  trackbydata(index:number,studentArr:any) {
    return studentArr.id;

  }
  ngOnDestroy(): void {
   console.log("GrandChild:-ondestroy")
  }
  ngAfterViewChecked(): void {
   console.log("GrandChild:-afterviewchecked")
  }
  ngAfterViewInit(): void {
    console.log("GrandChild:-afterviewinit")
  }
  ngAfterContentChecked(): void {
    console.log("GrandChild:-aftercontentchecked")
  }
  ngAfterContentInit(): void {
    console.log("GrandChild:-aftercontentinit")
  }
  ngDoCheck(): void {
  console.log("GrandChild:-docheck")
  }
  ngOnInit(): void {
    console.log("GrandChild:-oninit")
    this.employee();


    // this.emp.valueChanges.subscribe((selectedvalue)=>{
    //   console.log('value changes'+selectedvalue.empaddress.city)
    //   alert(selectedvalue.firstname)
    // })
   
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("GrandChild:-onchange")
  }

emp !:FormGroup;


  contactform=new FormGroup({
    firstname:new FormControl({value:'ibney hasan',disabled:true}),
    lastname:new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    ismarride:new FormControl(),
    conuntry:new FormControl(),
    contactadd:new FormGroup({
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
    })
  })

  employee(){
    this.emp=this.fb.group({
      firstname:['ibney',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      lastname:['hasan',[Validators.required,Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(10)]],
      empaddress:this.fb.group({
        city:['bareilly',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
        state:['utterpradesh',[Validators.required,Validators.pattern("^[a-zA-Z,0-9]+$")]],
        pincode:['243502',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(10)]]
      })
    })
        
  }

  onSubmit(){
    console.log(this.contactform.value)
  }

  onSubmit2(){
    console.log(this.emp.value)
  }

  setDefaultvalue(){
    let defaultvalue={
      firstname:'ibney1',lastname:'hasan1',
      empaddress:{city:'bareilly1',state:'utter pradesh1',pincode:'2435021'}
    }
  
    this.emp.setValue(defaultvalue);
  }

  patchvalue(){
    let patchvalue={
      firstname:'ibneyhasan',
      empaddress:{city:'bareilly cb',pincode:'23456'}
    }
    this.emp.patchValue(patchvalue)

    this.emp.valueChanges.subscribe(newstatus=>{
      console.log('newstatus',newstatus)
    });

    this.emp.statusChanges.subscribe(newstatus=>{
      console.log('newstatus',newstatus)
    });

  }


  resetvalue(){
    this.emp.reset();
  }
}
