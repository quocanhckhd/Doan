import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Detail {
  id_detail: number;
  detail: string;
  date: Date;
  category:string;
  price: number;
  note: string;
  status: number;
}
export interface User {
  username: string;
  password: string;
  
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  rootURL = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  getListDetail(username): Observable<Array<Detail>> {
    return this.http.get<Array<Detail>>(this.rootURL + "/detail/all/"+username);
  }
  addDetail(detail) {
    return this.http.post<Response>(this.rootURL + "/detail/add", detail, {
      observe: 'response'});
  }
  getUser(username):Observable<User> {
    return this.http.get<User>(this.rootURL+"/user/get/"+username);
  }
}
