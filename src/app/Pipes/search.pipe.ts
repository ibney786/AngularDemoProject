import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  transform(value: any, gender: any):any {
    if(gender=='male'){
      return `Mr ${value}` 
    }
    else{
      return `Miss ${value}`
    }
  }

  // transform(value: any,name: string):any {
  //   debugger
    
  //   if(name===''){
  //     return value;
  //   }
  
  //   return value.filter((employee:any)=>{
  //     employee.firstName.startWith(name);
  //   })
  // }

}
