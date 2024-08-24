import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ServiceDataService } from 'src/app/service-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
userForm!:FormGroup

 userData:any;
  constructor(private myservice:ServiceDataService){
   

  }

  ngOnInit(): void {

    this.userformdata();
    this.getUserData();
  
  }


  userformdata(){
    this.userForm=new FormGroup({
      id:new FormControl(''),
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    gender:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    phone:new FormControl('')

  })
}




getUserData(){debugger
  this.myservice.getUserData().subscribe(res=>{debugger
    this.userData=res;
        })
}

addUser(user:any){
  if(user.value.firstname=="" ){
    alert("Please enter the details")
  }
  
  else{
this.myservice.postUserData(user.value).subscribe((res)=>{
  this.userData=res;
  this.getUserData();
  this.userformdata();
  this.clear();
});
}

}

update(user:any){
this.myservice.updateUser(user.value).subscribe((res)=>{
  this.userData=res;
  this.getUserData();
  this.userformdata();
  this.clear();
})

}

editUserData(edit:any){

this.userForm.patchValue(edit);

}

delete(user:any){
  console.log(user)
 this.myservice.deleteUser(user).subscribe((res)=>{
this.userData=res;
this.getUserData();
 })

}

clear(){
  this.userForm.reset();
}

}
