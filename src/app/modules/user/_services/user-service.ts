import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UserService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  createUser(data: any, urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/users/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  getListApp(urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/users/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  getDetailApp(urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');

    const url =
      'http://www.' +
      urlSrc +
      '.' +
      `${MainSource.domain}/api/applications/` +
      urlData +
      '/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
}
