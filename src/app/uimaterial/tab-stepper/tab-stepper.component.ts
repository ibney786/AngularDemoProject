import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-tab-stepper',
  templateUrl: './tab-stepper.component.html',
  styleUrls: ['./tab-stepper.component.css']
})
export class TabStepperComponent implements OnInit {
  selectedValue:string='';
  selectedValue2:string='';
  subject:string='';
  minDate=new Date();



  listvalues:string[]=['angular','react','vue','c++','.net core','paythan']

  objList=[{name:'angualr'},
  {name:'angualr1'},
  {name:'angualr2'},
  {name:'angualr3'},
  {name:'angualr4'},
]

optionsValue=[
  {name:'Maths'},{name:'English'},{name:'social sceince'},{name:'hindi'},{name:'arts'},
  {name:'commerce'},{name:'chemistri'}
]

controlsName!:FormGroup
mycontrols=new FormControl('');
filteroptions:any;
    constructor(){
            
    }

    // date filter function
    dateFilter=(date:any)=>{
const day=date.getDay();
return day !==0 && day !==6;
    }

    formControls(){
this.controlsName=new FormGroup({
  name:new FormControl('')
})
    }


  ngOnInit(): void {
    // this.formControls();

    const opstionlsit=this.mycontrols.valueChanges.pipe(
      startWith(''),
      map(res=>{
        return this._filter(res)
      })
    )
  }

  private _filter(value:any){
    const filtervalue=value.toLowerCase();
    return this.optionsValue.filter((opt)=>{
      opt.name.includes(filtervalue)
    })
  }

    displayfn(value:any){
      return value? value.name:undefined
    }


}
