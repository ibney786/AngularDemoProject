import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  emp !:FormGroup;
  constructor( private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.employee();
  }


  
  employee(){
    this.emp=this.fb.group({
      firstname:[''],
      lastname:[''],
     email:[''],
     phone_No:[''],
     campany:[''],
     gender:[''],
     dob:[''],
     password:[''],
     confirmPassword:['']

    })
  
        
  }

userValue:any[]=[];
  submit(emp:any){debugger
this.userValue.push(emp.value)
  }
reset():void{
  
}
edit(row:any, i:any) {

  // this.emp.get("firstname")?.value.patchValue(this.emp.value.firstname)
}
delete(i:any){debugger
console.log("index value"+i)
}




}
