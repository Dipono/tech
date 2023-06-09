import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobstatusService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/jobstatus';
  //UPDATE JOBSTATUS  
  updateJobstatus(data:any, id:any):Observable<any>
  {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }
}
