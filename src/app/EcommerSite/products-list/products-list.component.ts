import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/Services/ecommerce.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  productsList:any;

  constructor(private ecommerce:EcommerceService){

  }

ngOnInit(): void {
  this.getProductsList();
}

getProductsList(){

  this.ecommerce.getAllProductsList().subscribe((res:any)=>{debugger
    console.log("productslist",res.data)
  })
}

}
