import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
 endPointAllProducts='https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts';

 userURL="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }


  getAllProductsList():Observable<any[]>{
    
    return this.http.get<any[]>(this.userURL);
  
    // return this.http.get<any[]>('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts');
  }

}





