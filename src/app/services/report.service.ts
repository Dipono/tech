import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/get_report';
  apiUrl1 = 'http://localhost:3000/report';
  apiUrl2 = 'http://localhost:3000/report/:id';
  

  viewReport():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
  viewReport1():Observable<any>
  {
    return this._http.get(`${this.apiUrl2}`);
  }
  //POST********************************************
  sendRequest(data:any):Observable<any>
  {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl1}`, data); //POST EXPECT 2-3 ARGUMENTS
  }
}
