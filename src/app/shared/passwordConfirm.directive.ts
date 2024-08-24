import { Directive,Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[passwordConfirm]',
  providers:[
    {
        provide:NG_VALIDATORS,
        useExisting:passwordConfirmDirective,
        multi:true
    }
  ]
  
})
export class passwordConfirmDirective implements Validator {
// validate(control: AbstractControl<any, any>): ValidationErrors | null {
//     throw new Error('Method not implemented.');
// }
// registerOnValidatorChange?(fn: () => void): void {
//     throw new Error('Method not implemented.');
// }
@Input() passwordConfirm:any;

validate(control:AbstractControl):{[key:string]:any}|null{
    const controltocompair=control.parent?.get(this.passwordConfirm);
    if(controltocompair && controltocompair.value !==control.value){
        return {"notEqual":true}
    }
    return null;
}

}