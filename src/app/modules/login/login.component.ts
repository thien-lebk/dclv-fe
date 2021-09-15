import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthUserService} from '../../services/authUser.service';
import {LoadingService} from '../../services/loadingService';
import {AlertService} from '../../services/alertService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth$: AuthUserService,
    private loading$: LoadingService,
    private alert$: AlertService,
    private router: Router,
  ) { }
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
  if (this.auth$.isAuthenticated()){
    this.router.navigateByUrl('/');
  }
  }
  onSubmit(): void {
    console.log(this.profileForm.value);
    this.loading$.startLoading();
    this.auth$.login(this.profileForm.value).subscribe(ele => {
        localStorage.setItem('refresh', ele.refresh);
        localStorage.setItem('access', ele.access);
        this.loading$.stopLoading();
        window.location.reload();
      },
      (error) => {
        // console.log(error.error);
        this.loading$.stopLoading();
        // tslint:disable-next-line:forin
        for (const property in error.error) {
          this.alert$.error( property + ' ' +  error.error[property][0]);
        }

      }
    );
  }

}
