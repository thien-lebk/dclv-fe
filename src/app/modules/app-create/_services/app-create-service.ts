import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { AppcreateDto } from '../_modal/app-create-dto';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
import { convertObjectToParamHttpRequest } from '@app/shared/utilis/common-function';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AppCreateService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  createApp(data: AppcreateDto, urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/applications/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  getListApp(urlData: string, getParam?: PaginationDto): Observable<any> {
    const token = localStorage.getItem('access');
    const params = convertObjectToParamHttpRequest(getParam);
    console.log(params);
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/applications/`;
    const httpOptions = {
      params,
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
