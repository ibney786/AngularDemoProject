import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  employees:Employee[]=[
    { 
      id:1,
      name:'Ibney hasan',
      gender:'male',
      email:'hasanibney33@gmail.com',
      phoneNumber:12345544,
      dateofbirth:new Date(),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/earth-day.jpg'
  },
  { 
    id:2,
    name:'vivek rastogi',
    gender:'male',
    email:'rastogi20@gmail.com',
    phoneNumber:3920749032,
    dateofbirth:new Date(),
    department:'management',
    isActive:true,
    photoPath:'assets/images/hh.png'
},
{ 
  id:3,
  name:'Rahul shign',
  gender:'male',
  email:'rahul21@gmail.com',
  phoneNumber:8909708656,
  dateofbirth:new Date(),
  department:'sales',
  isActive:true,
  photoPath:'assets/images/iii.jpg'
},
  ];
  constructor(private route:Router){}


  create():void{
this.route.navigate(['kudvenkat/create']);
  }

}
