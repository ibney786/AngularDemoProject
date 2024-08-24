import { Component } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  subjectData:any
  BehaviorSubjectData:any
  constructor(private servicedata:ServiceDataService){
this.servicedata.commandata.subscribe(res=>{
  this.subjectData=res
});
this.servicedata.commanData1.subscribe((res)=>{
  this.BehaviorSubjectData=res;
})
  }
  sData( data:any){
console.log(data)
this.servicedata.commandata.next(data.value);
  }
  bSData(data:any){
    this.servicedata.commanData1.next(data.value);
  }
}
