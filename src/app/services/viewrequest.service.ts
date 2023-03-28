import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewrequestService {

  constructor(private _http:HttpClient) { }

    //CONNECT FRONT-END TO THE BACKBACK
    apiUrl = 'http://localhost:3000/jobcard';
    //GET*********************************************
    viewRequest():Observable<any>
    {
      return this._http.get(`${this.apiUrl}`);
    }

    //Update record
    updateRequest(data:any, id:any)
    {
      let ids = id;
      return this._http.put(`${this.apiUrl}/${ids}`, data);
    }

    deleteRequest(id:any):Observable<any>
    {
      let ids = id;
      return this._http.delete(`${this.apiUrl}/${ids}`);
    }
    //VIEW BY ID
    viewRequest1(id:any):Observable<any>
    {
      let ids = id;
      return this._http.get(`${this.apiUrl}/${ids}`);
    }
}
