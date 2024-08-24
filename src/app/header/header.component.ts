import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route:Router,private activeroute:ActivatedRoute){}


  // ===================================================
  angular6():void{
    this.route.navigate(['angular6/emp'],{relativeTo:this.activeroute})
  }
  AngularCrud(){
    this.route.navigate(['kudvenkat/list'],{relativeTo:this.activeroute})
  
  }

  myproject():void{
    this.route.navigate(['myproject/adduser'],{relativeTo:this.activeroute})
  }

  EcommerceSite(){
    this.route.navigate(['Ecommerce/products'],{relativeTo:this.activeroute})
  }


  // Life cycle hook method list ===================

  lifecyclehooks(){
    this.route.navigate(['lifecycle/parent'],{relativeTo:this.activeroute})
  }

  angular_17(){
    this.route.navigate(['shahosoft/parent'],{relativeTo:this.activeroute})
  }



  // bootstrap method list =========
  bootstrap(){
    this.route.navigate(['bootstrap/bootHome'],{relativeTo:this.activeroute})
  }
  pipeExam(){
    this.route.navigate(['bootstrap/pipe'],{relativeTo:this.activeroute})

  }
}
