import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { UpdateAppDetailDto } from '../_modal/update-app-detail-dto';
import { AppcreateDto } from '../../app-create/_modal/app-create-dto';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ApplicationService {
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
  getListApp(urlData: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url =
      'http://www.' + urlData + '.' + `${MainSource.domain}/api/applications/`;
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
  updateDetailApp(
    id: number,
    updateAppDetailDto: UpdateAppDetailDto
  ): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');
    const body = JSON.stringify(updateAppDetailDto);

    const url =
      'http://www.' +
      urlSrc +
      '.' +
      `${MainSource.domain}/api/applications/` +
      id +
      '/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.patch<any>(url, body, httpOptions);
  }
  deleteDetailApp(id: number): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');

    const url =
      'http://www.' +
      urlSrc +
      '.' +
      `${MainSource.domain}/api/applications/` +
      id +
      '/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.delete<any>(url, httpOptions);
  }
}
