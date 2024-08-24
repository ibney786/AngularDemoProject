import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit,OnChanges,AfterViewInit {
@Input() gridData:any


displayColumns:string[]=['FirstName','LastName','Email','Phone','Company','Gender','DateOfBirth']
dataSource=new MatTableDataSource<Element>();

constructor(){
}
  ngAfterViewInit(): void {debugger
    console.log(this.gridData)
  }
 ngOnInit(): void {debugger
   console.log(this.gridData)
 }
 ngOnChanges(changes: SimpleChanges): void {
  debugger
  console.log(this.gridData)
 }

filterValue(filtervalue:any){debugger
  this.dataSource.filter=filtervalue.target.value.trim().toLowerCase();

}
logRowData(row:any){
  console.log(row)
}

}
