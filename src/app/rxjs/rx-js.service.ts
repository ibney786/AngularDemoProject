import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxJsService {

  constructor() { }

  subjectData=new Subject();
  behaviourSubject=new BehaviorSubject("behaviorsubject data ibney")
}
