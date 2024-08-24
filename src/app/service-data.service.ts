// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  userURL="http://localhost:3000/posts";
  endPointAllProducts="https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts";
  // endPointAllProducts='http://localhost:3000/Products';

  // https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts
  

  endPoint="https://jsonplaceholder.typicode.com/posts";

  url='https://demo.he.nic.in/pmusha/institute/ndmc-save-land?isOrganogramUploaded=false&menu=STATE_PROFILE'
// token='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTQUEtTUgiLCJhdXRob3JpdGllcyI6W10sImlhdCI6MTcwMDI5OTkxMCwiZXhwIjoxNzAwMzAzNTEwfQ.NqW5MaKeASHt2bS-M3oUwQQIcAVh6T6id8y_TwND-gEZsamheS1mNzOZOdxRuT_ZUqIHC-_CIIg5jnxGZoeGmg'

  constructor(private http:HttpClient) { }


  commandata=new Subject();
  commanData1=new BehaviorSubject("ibney Hasan");


postdata(data:any){
  let headers=new HttpHeaders().set(

    "token",'Bearer ${eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTQUEtTUgiLCJhdXRob3JpdGllcyI6W10sImlhdCI6MTcwMDI5OTkxMCwiZXhwIjoxNzAwMzAzNTEwfQ.NqW5MaKeASHt2bS-M3oUwQQIcAVh6T6id8y_TwND-gEZsamheS1mNzOZOdxRuT_ZUqIHC-_CIIg5jnxGZoeGmg}'
  )
return this.http.post(this.url,data,{headers})
}


getUserData() {
  return this.http.get(this.userURL);
}


postUserData(UserData:any){

  return this.http.post(this.userURL,UserData);
}

updateUser(UserData:any){

  let userId=UserData.id;
  return this.http.put(`${this.userURL}/${userId}`,UserData)
}

deleteUser(UserData:any){
  let userId=UserData.id;
  return this.http.delete(`${this.userURL}/${userId}`,UserData)

}

}
