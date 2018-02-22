import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken :any;
  user : any;
  //Developmet api
  apiUrl = 'http://localhost:8000/users';
  //Production
  //apiUrl = 'users';

  constructor(private http : Http) { }

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

  authenticatesUser = (auth)=>{
    return this.http.
    post(`${this.apiUrl}/authenticate` ,
     auth).map(respoonse =>respoonse.json());
  }

  storeUserData = (token , user)=>{
    localStorage.setItem('id_token' , token);
    localStorage.setItem('user' , JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout = ()=>{
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn= ()=>{
    return tokenNotExpired('id_token');
  }

  getProfile = ()=>{
    this.loadToken();
    const headers = this.addheader();
    headers.append('Authorization' , this.authToken);
    
    return this.http.get(`${this.apiUrl}/profile` ,{headers : headers} ).
    map(response=>response.json());
  }

  loadToken= ()=>{
    this.authToken = localStorage.getItem('id_token');     
  }

}
