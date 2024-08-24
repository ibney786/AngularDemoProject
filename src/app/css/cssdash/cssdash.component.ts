import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cssdash',
  templateUrl: './cssdash.component.html',
  styleUrls: ['./cssdash.component.css']
})
export class CssdashComponent implements OnInit {

  studentform:any
  constructor(private route:Router,private fb:FormBuilder){

  }
  ngOnInit(): void {
   this.studentform=this.fb.group({
    stuname:['',[Validators.required,Validators.maxLength(5),Validators.minLength(3)]]
    });

    // this.studentform.get('stuname').valueChanges.subscribe((stuname:any)=>{
    //   console.log(stuname)
    // })

    this.studentform.valueChanges.subscribe((stu:any)=>{
      console.log(stu)
    });

    this.studentform.get('stuname').statusChanges.subscribe((tus:any)=>{
      console.log(tus)
    })
  }

  padding():void{
    this.route.navigate(['Css/list']);
  }

}
