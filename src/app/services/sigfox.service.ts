import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// TODO these credentials should be acquired via a login action
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('username:password')
  })
};

export interface SigfoxLocation {
  lat: number,
  lng: number
}

@Injectable({
  providedIn: 'root'
})
export class SigfoxService {

  constructor(
    private http: HttpClient
  ) { }


  public getLocations () {
    return this.http.get<SigfoxLocation[]>('http://api.oyster-example.com/v1/locations', httpOptions).toPromise().catch((err) => {
      console.error('There is no such service. Let\'s return fake data instead', err);
      return [
        { lat: 34.7, lng: 81 },
        { lat: 99.5, lng: 22 },
        { lat: 22.0, lng: 221 },
        { lat: 51.678418, lng: 7.809007 }
      ];
    });
  }
}


