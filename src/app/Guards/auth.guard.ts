import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class AuthGuard {

  constructor(private authService:AuthService ,private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //your logic goes here
    let Url=state.url;
    console.log('url check',Url);
    if(this.authService.isUserLogedIn()){
      return true;
    }
     alert("you don't have permision to access the component,Please go to the admin tab")

    this.authService.setRedirectUrl(Url);
    this.router.navigate([this.authService.getLoginUrl()]);
    return false;
    
  }


  canActivateChild(next:ActivatedRouteSnapshot,state:RouterStateSnapshot ):boolean{
    let logedInUser=this.authService.getLogedInUser();
    if(logedInUser.role=='Admin'){
      return true;
    }
    else{
      console.log("unauthorized to open link",state.url);
      return false;
    }
  }
}



// export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(PermissionsService).canActivate(next, state);
// }