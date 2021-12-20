import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { GetParamListUser } from '@app/modules/user/_dto/get-list-user-dto';
import { convertObjectToParamHttpRequest } from '@app/shared/utilis/common-function';
import { UpdateUserDetailDto } from '@app/modules/user/_dto/update-user-detail-dto';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UserService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  createUser(data: any, urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url = 'https://' + urlData + '.' + `${MainSource.domain}/api/users/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }

  updateUser(
    data: UpdateUserDetailDto,
    urlData: string,
    id: string
  ): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'https://' + urlData + '.' + `${MainSource.domain}/api/users/${id}/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.patch<any>(url, body, httpOptions);
  }

  getListUser(urlData: string, getParam: GetParamListUser): Observable<any> {
    const token = localStorage.getItem('access');
    const params = convertObjectToParamHttpRequest(getParam);
    const url = 'https://' + urlData + '.' + `${MainSource.domain}/api/users/`;
    const httpOptions = {
      params,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  getDetailUser(urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');

    const url =
      'https://' +
      urlSrc +
      '.' +
      `${MainSource.domain}/api/users/` +
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
