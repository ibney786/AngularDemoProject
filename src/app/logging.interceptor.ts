import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifyreq=request.clone({setHeaders:{"X-request-id":'1234'}});
    console.log("request",modifyreq)
    return next.handle(modifyreq).pipe(tap(respose=>console.log("respose",respose)));
  }
}
