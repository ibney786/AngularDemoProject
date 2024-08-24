import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,AfterViewInit {

  displayColumns:string[]=['id','name','address','position','mobile','countEmp']
// dataSource=Element_Data;
dataSource=new MatTableDataSource(Element_Data);
// @ViewChild(MatSort) sort =new MatSort;
@ViewChild(MatPaginator) paginator !:MatPaginator;
@ViewChild(MatSort) matsort={} as MatSort;
constructor(){

}

  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.matsort;
  }
  ngOnInit(): void {
  }

filterValue(filtervalue:any){debugger
  this.dataSource.filter=filtervalue.target.value.trim().toLowerCase();

}
logRowData(row:any){
  console.log(row)
}
}


export interface periodicElement{
  id:number;
  name:string;
  address:string;
  position:string;
  mobile:number;
  countEmp:number;

  
}

const Element_Data:periodicElement[]=[
  {id:1,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:12},
  {id:2,name:'Noor',address:'up',position:'first',mobile:9080706050,countEmp:11},
  {id:3,name:'mukim',address:'rm',position:'second',mobile:9080706050,countEmp:15},
  {id:4,name:'rahul',address:'cb',position:'third developer',mobile:9080706050,countEmp:16},
  {id:5,name:'suresh',address:'lk',position:'fourth',mobile:9080706050,countEmp:18},
  {id:6,name:'mukesh',address:'uo',position:'five',mobile:9080706050,countEmp:19},
  {id:7,name:'ibney hasan',address:'uk',position:'six',mobile:9080706050,countEmp:15},
  {id:8,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:133},
  {id:9,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:123},
  {id:10,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:122},
  {id:11,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:121},
  {id:12,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:128},
  {id:13,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:129},
  {id:14,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:120},
  {id:15,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:111},
  {id:16,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:144},
  {id:17,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:180},
  {id:18,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:155},
  {id:19,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:100},
  {id:20,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:170},
  {id:21,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:160},

]

