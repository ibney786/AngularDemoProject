import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { customValidators } from 'src/app/shared/customValidators';
@Component({
  selector: 'app-angular6',
  templateUrl: './angular6.component.html',
  styleUrls: ['./angular6.component.css']
})
export class Angular6Component implements OnInit {

  employeeForm !:FormGroup;
  fullNameLength=0;

  validationMessage:any={
    'FullName':{
      'required':'Full Name is required',
      'minlength':'Full Name must be greater then 2 character',
      'maxlength':'full name must be less then 10 characters'
    },
    'Email':{
      'required':'email is required.',
      // 'emailDomainCloser':'email domain should be i@gmail.com',
      'emailDomain':'email domain should be pragim.com',
     
    },
    'confirmEmail':{
      'required':'confirmEmail email is required'
    },
    'emailGroup':{
      'emailMisMatch':'email and confirm email is not match'
    },

    
    'skillName':{
      'required':'skill name is requied.'
    },
    'experienceInYear':{
      'required':'experienceInYear is requied.'
    },
    'proficiency':{
      'required':'proficiency is required.'
    }


  }

  formerrors:any={
    'FullName':'',
    'emailGroup':'',
    'Email':'',
    'confirmEmail':'',
    'skillName':'',
    'experienceInYear':'',
    'proficiency':''
  }

  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
// this.formGroupData();
this.formBuilderdata();
   
  }

  public formGroupData(){
    this.employeeForm=new FormGroup({
      FullName:new FormControl(),
      Email:new FormControl(),

      Skills:new FormGroup({
        skillName:new FormControl(),
        experienceInYear:new FormControl(),
        proficiency:new FormControl()
      })
    })
  }

  public formBuilderdata(){
    this.employeeForm=this.fb.group({
      FullName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      emailGroup:this.fb.group({
        Email:['',[Validators.required,customValidators.emailDomain]],
        confirmEmail:['',Validators.required],
      },{validators : emailMatch}),

      Skills:this.fb.group({
        skillName:['',[Validators.required]],
        experienceInYear:['',[Validators.required]],
        proficiency:['',[Validators.required]],
      }),
    });

    this.employeeForm.get('FullName')?.valueChanges.subscribe((value:string)=>{
      this.fullNameLength=value.length;
    })

    this.employeeForm.valueChanges.subscribe((data:any)=>{
      this.logvalidationErrors(this.employeeForm)
    })


  }


  // onLoadData():void{
  //   this.employeeForm.setValue({
  //     FullName:'ibney',
  //     Email:'hasanibney45@gmail.com',
  //     Skills:{
  //       skillName:'angular',
  //       experienceInYear:'2000',
  //       proficiency:'advance'
  //    }
  //   })
  // }

  onLoadData():void{
    // this.employeeForm.patchValue({
    //   FullName:'ibney',
    //   Email:'hasanibney45@gmail.com',
      
    // })


    // this.logvalidationErrors(this.employeeForm)
    // console.log(this.formerrors);
  }

  logvalidationErrors(group:FormGroup=this.employeeForm):void{
    Object.keys(group.controls).forEach((key:string)=>{
      const abstractcontrols=group.get(key);


      this.formerrors[key]='';
        if(abstractcontrols && !abstractcontrols.valid &&(abstractcontrols.touched || abstractcontrols.dirty)){
          const messages=this.validationMessage[key];
          for(const errorkey in abstractcontrols.errors){
            if(errorkey){
              this.formerrors[key]+=messages[errorkey]+' ';
  
            }
          }
        }


      if(abstractcontrols instanceof FormGroup){
        this.logvalidationErrors(abstractcontrols)
      }
      // else{
        
        // console.log('key'+key +"value"+abstractcontrols?.value)
        // abstractcontrols?.markAsDirty();
        // // abstractcontrols?.disable();
      // }
    })
  }



  onSubmit():void{
    console.log(this.employeeForm.value)

    alert(`FullName:-${this.employeeForm.get('FullName')?.value} 
             Email:- ${this.employeeForm.get('Email')?.value}

             skillName:-${this.employeeForm.get('Skills.skillName')?.value}
             exp:-${this.employeeForm.get('Skills.experienceInYear')?.value}
             proficiency:-${this.employeeForm.get('Skills.proficiency')?.value}`)
  }

}





function emailMatch(group:AbstractControl):{[key:string]:any }|null{
  const emailControl=group.get('Email');
  const confirmEmailControl=group.get('confirmEmail');
  if(emailControl?.value===confirmEmailControl?.value ||confirmEmailControl?.pristine){
    return null;
  }
  else{
    return {'emailMisMatch':true};
  }
}

// create the custom validators

// function emailDomain(control:AbstractControl):{[key:string]:any } | null{
//   const email:string=control.value;
//   const domain=email.substring(email.lastIndexOf('@')+1);
//   if(email==='' || domain.toLowerCase()==='pragim.com'){
//     return null;
//   }
//   else{
//     return {'emailDomain':true}
//   }

// }

// create the custom validators by useing systax closer


// function emailDomainCloser(domainName:string){
//   return (control:AbstractControl):{[key:string]:any } | null=>{
//   const email:string=control.value;
//   const domain=email.substring(email.lastIndexOf('@')+1);
//   if(email==='' || domain.toLowerCase()===domainName.toLowerCase()){
//     return null;
//   }
//   else{
//     return {'emailDomainCloser':true}
//   }

// };

// }

  