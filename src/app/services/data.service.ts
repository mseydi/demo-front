import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  getCompte(){
  return this.http.get(this.host+"/comptes")
      .map(resp=>resp.json());
  }
}
