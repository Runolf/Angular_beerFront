import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {LoginService} from './../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let token = sessionStorage.getItem("token");
    let reqaut;
    let authentificationString = "Bearer "+token;
    
    console.log(authentificationString);

    if(token != null) {
      console.log("auth");

      reqaut = req.clone({
        setHeaders : {
          "Authorization" : authentificationString,
          "Content-Type" : "application/json"
        }
      });
    } else {
      console.log("not auth");
      reqaut = req.clone({
        setHeaders : {
          "Content-Type" : "application/json"
        }
      });
    }

    console.info(reqaut);

    return next.handle(reqaut);
  }
}
