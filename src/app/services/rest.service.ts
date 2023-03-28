import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Staff } from '../models/staff';
import { Observable } from 'rxjs';
import { StaffFetch } from '../models/staff-fetch';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  //********************************************************************* */
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  }

  constructor(private http:HttpClient) { }
  s_url:string = "http://localhost:3000/staff";
 //a_url:string = "http://localhost:3000/artisan";

  // WORKING WITH LIFE OF STAFF
  getStaff(){
    return this.http.get< Staff[]>(this.s_url)
  }
  
  deleteStaff(number:number): Observable<Staff>{
    const s_url = `${this.s_url}/${number}`;
    return this.http.delete<Staff>(s_url, this.httpOptions)
  }

  getUpdateStaff(number:number): Observable<Staff>{
    const s_url = `${this.s_url}/${number}`;
    return this.http.get<Staff>(s_url, this.httpOptions)
  }

  updateStaff(staffM: StaffFetch): Observable<StaffFetch>{
    const s_url = `${this.s_url}/${staffM.number}`;
    return this.http.put<Staff>(s_url, staffM, this.httpOptions).pipe(
      map(() => staffM)
    );
  }

  // WORKING WITH LIFE OF ARTISAN
  getArtisan(){
    return this.http.get< Staff[]>(this.s_url)
  }
  deleteArtisan(number:number): Observable<Staff>{
    const s_url = `${this.s_url}/${number}`;
    return this.http.delete<Staff>(s_url, this.httpOptions)
  }

}
