import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements AfterViewInit,OnInit {
ngOnInit(): void {debugger
  this.name.value
}
ngAfterViewInit(): void {debugger
  this.name.value
}
@ViewChild("name") name:any;
 


}
