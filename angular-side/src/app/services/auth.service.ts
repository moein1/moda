import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken :any;
  user : any;
  apiUrl = 'http://localhost:3001/users/';

  constructor(private http : Http ) { }

  addheader = ()=>{
    let headers = new Headers();
    headers.append('Content-Type' , 'application/json');
    return headers;
  }

  registerUser = (user)=>{
    return this.http.
    post(`${this.apiUrl}/register`,
     user ,{headers : this.addheader()}).map(response =>response.json());
  }

  loginUser = (auth)=>{
    return this.http.
    post(`${this.apiUrl}/login` ,
     auth).map(respoonse =>respoonse.json());
  }

}
