import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainSource} from './source';
import {UserCreateDto} from '../dto/auth/UserCreateDto';
import {Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {CanActivate, Router} from '@angular/router';
import {AuthUserService} from './authUser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private  auth: AuthUserService,
    public router: Router,
  ) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
