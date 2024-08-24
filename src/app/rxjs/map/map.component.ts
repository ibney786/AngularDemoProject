import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, count, debounceTime, delay, from, map, mergeMap, of } from 'rxjs';
import { ServiceDataService } from 'src/app/service-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css','../operator-list/operator-list.component.css'],

})
export class MapComponent implements OnInit {

sourceOf$=of(10,20,30,40,50);
sourceFrom=from(['ibney','hasna','khan','mukim','rahul','vicky'])
pipeusedvalue:any
  users=[
{id:1,FirstName:'ibney',LastName:'hasan'},
{id:2,FirstName:'rahul',LastName:'sharma'},
{id:3,FirstName:'vicky',LastName:'jain'},
{id:4,FirstName:'munawe',LastName:'khan'},
{id:5,FirstName:'mukim',LastName:'khan'},

  ]

  finalvalue:any[]=[]
  subjectused:any;
  constructor(private route:Router,private serviceData:ServiceDataService){

serviceData.commandata.subscribe((res)=>{
  this.subjectused=res;
})
  }


  subjectData(value:any){
this.serviceData.commandata.next(value)

  }


  ngOnInit(): void {
    const source$=from(this.users)

    source$
    .pipe(map(val=>{
      return {
        id:val.id,
        fullName:val.FirstName+" "+val.LastName
      }
    }))
    .subscribe(value=>{
      console.log(value)
this.finalvalue.push(value)
    })
  }



  pipe(){
    of(10,20,30).pipe( 
      delay(2000),
      map((m)=>{
        return m*2;
      })
    ).subscribe(res=>{
      console.log(res);
      this.pipeusedvalue=res;
    })
  }

  // margeMap Operators
/* mergeMap applies a given function to each source element and returns an observable as inner observable.
  At last all inner observables are merged. */
margemap:any;
  mergeMap(){
    this.sourceOf$.pipe(
      mergeMap(e =>
         of("@").pipe(
          
           map(v => v + e)
         )
   )).subscribe((output) =>{
    console.log(output)
    this.margemap=output
   }); 
   
  }


  // concatMap operator

  concatMapPoutput:any;
  concatmap(){
    of('ibney','hasan','khan','rahul').pipe(
      concatMap(res=>of('shree').pipe(
        delay(2000),
        map(out=>out +" " + res)
      ))
    ).subscribe((result=>{
this.concatMapPoutput=result;
    }))
  }


  // count operators
countoperator:any;
  countOperator(){
of("a","b","c","d","e").pipe(
  count()
).subscribe((res)=>{
  this.countoperator=res
})
  }


  // debounceTime operators
debouncetimeOperators:any;
  debounceTime(){
of("s","h","g","f","d").pipe(
  debounceTime(2000)
).subscribe((res)=>{
  this.debouncetimeOperators=res;
})
  }
  back(){
    this.route.navigate(['RxjsOperators/operatorsList'])
  }
  
}
