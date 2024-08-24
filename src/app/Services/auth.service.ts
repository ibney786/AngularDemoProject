import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable, map, of } from 'rxjs';

const USER=[
  new user(1,'ibney','123','Admin'),
  new user(2,'hasan','123','User')
]
 
let users$=of(USER)

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl:string='/';
  private loginUrl:string='/login';
  private isLogedIn:boolean=false;
  private logedInUser= {} as user

  getAllUsers():Observable<user[]>{
return users$;
  }


  isUserAuthenticated(username:string, password:string): Observable<boolean>{debugger

return this.getAllUsers().pipe(
  map(users=>{debugger
    let  user=users.find(user=>user.userName===username && user.password===password);
    if(user){debugger
      this.isLogedIn=true;
      this.logedInUser=user;
    }
    else{debugger
      this.isLogedIn=false;
      alert("invalide user !")
    }
    return this.isLogedIn
    debugger
  })
)
  }



  isUserLogedIn():boolean{
    return this.isLogedIn;
  }

  getRedirectUrl():string{
    return this.redirectUrl;
  }

  setRedirectUrl(url:string):void{
    this.redirectUrl=url;
  }
  getLoginUrl():string{
return this.loginUrl;
  }

  getLogedInUser():user{
    return this.logedInUser;
  }
  getLogedOut():void{
    this.isLogedIn=false;
  }
  
}
