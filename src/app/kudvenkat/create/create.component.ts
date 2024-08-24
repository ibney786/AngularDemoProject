import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { department } from '../department';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css','../bootstrapCss.css']
})
export class CreateComponent implements OnInit{

  previewPhoto=false;
  textColor='red'
  employeeform!:FormGroup 

  contactform=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    gender:new FormControl(''),

  })
  
  departments:department[]=[
    {id:1,name:'IT'},
    {id:2,name:'Help_desk'},
    {id:3,name:'HR'},
    {id:4,name:'Admin'},
    {id:5,name:'magt'},
    {id:6,name:'network'},

  ];
  
  constructor(private route:Router,private fb:FormBuilder){}
  


  showphoto(){
    this.previewPhoto=!this.previewPhoto;
  }
  ngOnInit(): void {
    this.inItfrom();
    
  }

  UserName=new FormControl("i");
  Email=new FormControl("");
  mobilenumber=new FormControl();
   gender=new FormControl();
   contactR=new FormControl();
   isChecked=new FormControl();
   notChecked=new FormControl();
   department=new FormControl();
   dateOfBirth=new FormControl();
   photopath=new FormControl();
  inItfrom(){
    this.employeeform=this.fb.group({
      id:['ibney'],
      // Name:new FormControl(''),
      // Gender:new FormControl(''),
      // Email:new FormControl(''),
      // phoneNumber:new FormControl(''),
      // DOB:new FormControl(''),
      // Department:new FormControl(''),
      // isActive:new FormControl(''),
      // PhotoPath:new FormControl('')


    }
    )
  }

  saveEmployee(data:NgForm) :void{
    console.log(data.value);
    alert(data.value.department)
  }

  onSubmit(data:any){
    console.log("data")
  }
  back():void{
    this.route.navigate(['kudvenkat/list']);
  }
}
