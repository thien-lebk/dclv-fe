import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainSource } from '@app/core/authentication/_source';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
export interface RegisterDto {
  email: string;
  password: string;
  name: boolean;
  username: boolean;
  phone: boolean;
  is_active?: boolean;
}
/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private credentialsService: CredentialsService,
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    const url = `${MainSource.route}/users/token/`;
    const body = JSON.stringify(context);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  register(context: RegisterDto): Observable<Credentials> {
    const url = `${MainSource.route}/users/`;
    const body = JSON.stringify(context);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
  getNewToken(refresh: string): Observable<Credentials> {
    const url = `${MainSource.route}/users/token/`;
    const data = { refresh };
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
}
