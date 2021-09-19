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
export class ClientService {

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }
  getClientList(): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/`;
    // const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
}
