import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDailogComponent } from '../mat-dailog/mat-dailog.component';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
number:any[]=[];

  constructor(public dailog:MatDialog){
for(var i=0;i<100;i++){
  this.number.push(i)
}

  }

  openDailog(){
    let matdialogref= this.dailog.open(MatDailogComponent,
      {data:{name:'ibney'},
      width:'600px',
      height:'400px',
      disableClose: true,
    }
      );

    matdialogref.afterClosed().subscribe((result)=>{
      console.log("result",result)
    })
  }

}
