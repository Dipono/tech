import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignArtisanService {

  constructor(private _http:HttpClient) { }

    //CONNECT FRONT-END TO THE BACKBACK
    apiUrl = 'http://localhost:3000/post_response';

    //POST********************************************
    assignArtisan(data:any):Observable<any>
    {
      console.log(data, 'createapi=>');
      return this._http.post(`${this.apiUrl}`, data); //POST EXPECT 2-3 ARGUMENTS
    }
}
