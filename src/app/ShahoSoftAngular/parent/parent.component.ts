
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
 encapsulation:ViewEncapsulation.None
  
})
export class ParentComponent {

  childdata:any
constructor(){

}

getchilddata(data:any){
this.childdata=data;
}
}
