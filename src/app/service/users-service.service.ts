import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {

  constructor(private http : HttpClient) { }

  getUsers(){
    let url = "http://localhost:8080/api/users/allUsers";

    return this.http.get(url);
  }

  postUser(){
    
    let url; 
  }

}
