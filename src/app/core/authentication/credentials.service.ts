import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '@app/core';
import { Observable } from 'rxjs';
import { MainSource } from '@app/core/authentication/_source';

export interface Credentials {
  // Customize received credentials here
  refresh: string;
  access: string;
}

const credentialsKey = 'credentials';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private _credentials: Credentials | null = null;

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    const savedCredentials =
      sessionStorage.getItem(credentialsKey) ||
      localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access');
    if (!token) {
      return false;
    } else if (this.jwtHelper.isTokenExpired(token)) {
      const tokenR = localStorage.getItem('refresh');
      // this.getNewToken(tokenR).subscribe(res => {
      //   localStorage.setItem('refresh', res.refresh);
      //   localStorage.setItem('access', res.access);
      //   return true;
      // });
      // console.log('hêre');
      localStorage.clear();

      return false;
    }
    return true;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }
  getNewToken(refresh: string): Observable<Credentials> {
    const url = `${MainSource.route}/users/refresh/`;
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
