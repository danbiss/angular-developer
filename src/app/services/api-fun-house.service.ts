import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class APIFunHouseService {

  jeopardyURL = 'http://jservice.io/api/random';
  numberURL = 'http://numbersapi.com';
  nasaURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Ov0OrglTkmYVrHgkVUK7t8nzt9adhhUO5RpvF5c9';

  constructor(private http: Http) { }

  getRandomQuestion(){
    let endpoint = this.jeopardyURL;
    return this.http.get(endpoint)
      .map(res => {
        return res.json();
      })
  }

  getNumberFact(number: string){
    let endpoint =  `${this.numberURL}/${number}`;
    return this.http.get(endpoint)
      .map(res => {
        return res.text();
      })
  }

  getNasaImg(){
    let endpoint =  this.nasaURL;
    return this.http.get(endpoint)
      .map(res => {
        return res.json();
      })
  }


}
