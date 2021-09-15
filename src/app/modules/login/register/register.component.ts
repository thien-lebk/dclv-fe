import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthUserService} from '../../../services/authUser.service';
import {LoadingService} from '../../../services/loadingService';
import {AlertService} from '../../../services/alertService';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
   private auth$: AuthUserService,
   private loading$: LoadingService,
   private alert$: AlertService,
   private router: Router,
  ) {
  }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.auth$.isAuthenticated()){
      this.router.navigateByUrl('/');
    }
  }

  onSubmit(): void {

    // TODO: Use EventEmitter with form value
    this.loading$.startLoading();
    this.auth$.create(this.profileForm.value).subscribe(ele => {
      console.log(ele.status);
      this.loading$.stopLoading();
      this.router.navigateByUrl('auth/login');
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
