
import { Component ,EventEmitter,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
// encapsulation:ViewEncapsulation.None
inputs:['pdata'],
outputs:['childData'],
})
export class ChildComponent {

  pdata:any
  childData=new EventEmitter()
constructor(){}

childdata(data:any){
  this.childData.emit(data)

}
}
