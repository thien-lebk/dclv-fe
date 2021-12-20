import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
import { convertObjectToParamHttpRequest } from '@app/shared/utilis/common-function';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class TenantApiService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  create(data: any, urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'https://' + urlData + '.' + `${MainSource.domain}/api/tenant-apis/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  update(data: any, urlData: string, id: string): Observable<any> {
    const url =
      'https://' +
      urlData +
      '.' +
      `${MainSource.domain}/api/tenant-apis/` +
      id +
      '/';
    const token = localStorage.getItem('access');
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.put<any>(url, body, httpOptions);
  }
  delete(urlData: string, id: string): Observable<any> {
    const url =
      'https://' +
      urlData +
      '.' +
      `${MainSource.domain}/api/tenant-apis/` +
      id +
      '/';
    const token = localStorage.getItem('access');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.delete<any>(url, httpOptions);
  }
  getList(urlData: string, getParam?: PaginationDto): Observable<any> {
    const token = localStorage.getItem('access');
    const params = convertObjectToParamHttpRequest(getParam);

    const url =
      'https://' + urlData + '.' + `${MainSource.domain}/api/tenant-apis/`;
    const httpOptions = {
      params,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  getDetail(id: string): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');

    const url =
      'https://' +
      urlSrc +
      '.' +
      `${MainSource.domain}/api/tenant-apis/` +
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
