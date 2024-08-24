import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-subject-operator',
  templateUrl: './subject-operator.component.html',
  styleUrls: ['./subject-operator.component.css']
})
export class SubjectOperatorComponent {

  constructor(private route:Router){}
 

  
back(){
  this.route.navigate(['RxjsOperators/operatorsList'])
}
}
