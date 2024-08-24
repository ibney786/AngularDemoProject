import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnChanges,AfterViewInit{

  @Input() userdetails:any[]=[];
  @Output() editUser=new EventEmitter<any>();
  @Output() deleteUser=new EventEmitter<any>();

  // @ViewChild(MatPaginator) paginator!:MatPaginator;
  // @ViewChild(MatSort)sort!:MatSort;

  @ViewChild(MatPaginator) paginator = {} as MatPaginator;
  @ViewChild(MatSort)sort = {} as MatSort;

  displayColumns:string[]=['Id','FirstName','LastName','Gender','Email','Address','Phone','Edit','Delete']
 
  dataSource=new MatTableDataSource();


  totalItems=100
  currentPage=0;
  constructor(){ }

  ngOnInit(){   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("data source",this.dataSource.data)
    this.dataSource.data=this.userdetails  
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  edit(data:any){
this.editUser.emit(data);
  }

  delete(data:any){
    this.deleteUser.emit(data);
  }


  logRowData(row:any){debugger
    console.log(row)
  }


}



const Element_Data:any[]=[
  {id:1,name:'ibney hasan',address:'Bareilly',position:'software developer',mobile:9080706050,countEmp:12},
  {id:2,name:'Noor',address:'up',position:'first',mobile:9080706050,countEmp:11},
  {id:3,name:'mukim',address:'rm',position:'second',mobile:9080706050,countEmp:15},
  {id:4,name:'rahul',address:'cb',position:'third developer',mobile:9080706050,countEmp:16}
]