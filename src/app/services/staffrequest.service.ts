import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffrequestService {

  constructor(private _http:HttpClient) { }

  //CONNECT FRONT-END TO THE BACKBACK
  apiUrl = 'http://localhost:3000/post_jobcard';

  //POST********************************************
  sendRequest(data:any):Observable<any>
  {
    console.log(data, 'createapi=>');
    return this._http.post(`${this.apiUrl}`, data); //POST EXPECT 2-3 ARGUMENTS
  }
}
