import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewrequestArtisanService {

  constructor(private _http:HttpClient) { }

  //CONNECT FRONT-END TO THE BACKBACK
  apiUrl = 'http://localhost:3000/jobcard';

  //GET************************************************
  viewRequest():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
  //DELETE*********************************************
  deleteRequest(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }
}
