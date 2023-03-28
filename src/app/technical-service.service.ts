import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TechnicalServiceService {
 
  constructor(private _http:HttpClient) { }
  url = 'http://localhost:3000/'

  jobcard_request(body:any){
    return this._http.post(`${this.url}jobcard`,body,{
      observe: 'body'
    })
  }

  display_requests(){
    return this._http.get(`${this.url}jobcard`)
  }

  display_artisan(){
    return this._http.get(`${this.url}getArtisan`)
  }

  update_artisan(jobcardId: Number, artId: any){
    return this._http.put(`${this.url}update_artisan/${jobcardId}`,artId)
  }

  create_report(body:any){
    return this._http.post(`${this.url}report`,body,{
      observe: 'body'
    })
  }

  read_report(){
    return this._http.get(`${this.url}report`)
  }

  update_status(jobcardId: Number, data: any){
    return this._http.put(`${this.url}update_artisan/${jobcardId}`,data)
  }

}
