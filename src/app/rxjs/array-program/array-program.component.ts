import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDataService } from 'src/app/service-data.service';

@Component({
  selector: 'app-array-program',
  templateUrl: './array-program.component.html',
  styleUrls: ['./array-program.component.css']
})
export class ArrayProgramComponent {

  array:any=[1,2,3,4,1,2,5,3,6,7,2,6,5,3,8,9,7,1];
  duplicate:any=[];
  
  subData:any;
  constructor(private route:Router,private servicedata:ServiceDataService){

    servicedata.commandata.subscribe((res)=>{
this.subData=res;
    })
  }


  subdata(value:any){
    this.servicedata.commandata.next(value)
  }
 value=this.array.forEach((element:any) => {
  console.log(element)
  this.duplicate.push(element)
  });

  back(){
    this.route.navigate(['RxjsOperators/operatorsList'])
  }


}
