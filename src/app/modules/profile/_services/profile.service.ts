import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '../../../core/authentication/_source';
import { GetParamListUser } from '@app/modules/user/_dto/get-list-user-dto';
import { convertObjectToParamHttpRequest } from '@app/shared/utilis/common-function';
import { UpdateUserDetailDto } from '@app/modules/user/_dto/update-user-detail-dto';
import { ProfilleDto } from '@app/modules/profile/_dto/profille.dto';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ProfileService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  updateUser(data: ProfilleDto): Observable<any> {
    const token = localStorage.getItem('access');
    const url = 'https://' + `${MainSource.domain}/api/users/`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  getDetailUser(): Observable<any> {
    const token = localStorage.getItem('access');
    const urlSrc = localStorage.getItem('client');

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
