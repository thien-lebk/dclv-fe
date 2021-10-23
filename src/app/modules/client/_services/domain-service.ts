import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { Domain } from '@app/modules/client/_modal/domain-modal';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class DomainService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  create(data: Domain): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/domain/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  get(): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/domain/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  gettest(): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/users/me/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
}
