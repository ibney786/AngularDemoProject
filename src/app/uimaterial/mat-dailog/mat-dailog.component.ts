import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dailog',
  templateUrl: './mat-dailog.component.html',
  styleUrls: ['./mat-dailog.component.css']
})
export class MatDailogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    
  }

}
