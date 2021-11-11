import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { ClientDto } from '@app/modules/client/_modal/client-modal';
import { convertObjectToParamHttpRequest } from '@app/shared/utilis/common-function';
import { PaginationDto } from '@app/shared/dto/pagination-dto';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ClientService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  create(data: ClientDto): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  update(id: string, data: ClientDto): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/${id}/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.patch<any>(url, body, httpOptions);
  }
  delete(id: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/${id}/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.delete<any>(url, httpOptions);
  }
  get(getParam: PaginationDto): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/`;
    const params = convertObjectToParamHttpRequest(getParam);
    const httpOptions = {
      params,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
  getDetailClient(id: string): Observable<any> {
    const token = localStorage.getItem('access');
    const url = `${MainSource.route}/client/${id}/`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.get<any>(url, httpOptions);
  }
}
