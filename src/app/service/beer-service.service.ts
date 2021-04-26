import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor(private http: HttpClient) { }

  getBeers(){
    let url = "http://localhost:8080/api/beers/allBeers";
    //console.log(this.http.get(url));
    return this.http.get(url);
  }

  getOneBeer(){
    let url = "http://localhost:8080/api/beers/oneBeer/4";
    return this.http.get(url);
  }
}
