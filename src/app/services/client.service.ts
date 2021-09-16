import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainSource} from './source';
import {UserCreateDto} from '../dto/auth/UserCreateDto';
import {Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {UserLoginDto} from '../dto/auth/UserLoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }
  create(data: UserCreateDto): Observable<any> {
    data.is_active = true;
    const url = `${MainSource.route}/users/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  login(data: UserLoginDto): Observable<any> {
    const url = `${MainSource.route}/users/token/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access');
    if (!token) { return  false; }
    // Check whether the token is expired and return
    // true or false
    // console.log(token);
    // console.log(this.jwtHelper.getTokenExpirationDate(token));
    // console.log(this.jwtHelper.decodeToken(token));
    return !this.jwtHelper.isTokenExpired(token);
  }
}
