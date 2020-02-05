import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://www.reddit.com/r/aww/.json";

  constructor( private http: HttpClient,) { }
    
  getPosts(){
      return this.http.get(this.baseUrl);
    }

    getPost( title : string){
      return this.http.get(`${this.baseUrl}/${title}`);
    }
}
