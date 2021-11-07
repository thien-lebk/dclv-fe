import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class RoleService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  createRole(data: any, urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/roles/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  updateRole(data: any, urlData: string, id: string): Observable<any> {
    const url =
      'http://www.' +
      urlData +
      '.' +
      `${MainSource.domain}/api/roles/` +
      id +
      '/';
    const token = localStorage.getItem('access');
    // const url =
    //   'http://www.' + urlData + '.' + `${MainSource.domain}/api/roles/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.put<any>(url, body, httpOptions);
  }
  deleteRole(urlData: string, id: string): Observable<any> {
    const url =
      'http://www.' +
      urlData +
      '.' +
      `${MainSource.domain}/api/roles/` +
      id +
      '/';
    const token = localStorage.getItem('access');
    // const url =
    //   'http://www.' + urlData + '.' + `${MainSource.domain}/api/roles/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.delete<any>(url, httpOptions);
  }
  getListRole(urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/roles/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  getDetailRole(id: string): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');

    const url =
      'http://www.' +
      urlSrc +
      '.' +
      `${MainSource.domain}/api/roles/` +
      id +
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
