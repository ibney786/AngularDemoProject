import { AbstractControl } from "@angular/forms";

export class customValidators{
    
// create the custom validators

static emailDomain(control:AbstractControl):{[key:string]:any } | null{
    const email:string=control.value;
    const domain=email.substring(email.lastIndexOf('@')+1);
    if(email==='' || domain.toLowerCase()==='pragim.com'){
      return null;
    }
    else{
      return {'emailDomain':true}
    }
  
  }
  
  // create the custom validators by useing systax closer
  
  
  static emailDomainCloser(domainName:string){
    return (control:AbstractControl):{[key:string]:any } | null=>{
    const email:string=control.value;
    const domain=email.substring(email.lastIndexOf('@')+1);
    if(email==='' || domain.toLowerCase()===domainName.toLowerCase()){
      return null;
    }
    else{
      return {'emailDomainCloser':true}
    }
  
  };
  
  }
} 