import { Component } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
// import {SearchPipe} from '../Pipes/search.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  // standalone:true,
  // imports:[SearchPipe]
})
export class CoursesComponent {
 
  subjectData:any
  BehaviorSubjectData:any

  mycssclass='red';
  applycssclass=true;


  constructor(private servicedata:ServiceDataService){
this.servicedata.commandata.subscribe(res=>{
  this.subjectData=res
});
this.servicedata.commanData1.subscribe((res)=>{
  this.BehaviorSubjectData=res;
});

  }


  sData( data:any){
console.log(data)
this.servicedata.commandata.next(data.value);
  }
  bSData(data:any){
    this.servicedata.commanData1.next(data.value);
  }
}
