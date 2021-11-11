import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import {
  faLock,
  faLongArrowAltRight,
  faPhone,
  faUser,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../_services/user-service';

@Component({
  selector: 'dc-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    lock: faLock,
    user: faUser,
    phone: faPhone,
    userAlt: faUserPlus
  };
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    repassword: new FormControl(''),
    is_active: new FormControl('')
  });
  waring: any;
  registerSuccess: any;

  constructor(
    private auth$: UserService,
    private router: Router,
    private loading$: LoadingService
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    this.profileForm.value.is_active = true;
    if (this.profileForm.value.password !== this.profileForm.value.repassword) {
      this.waring = { rePassword: 'Passwords must match' };
    } else {
      this.waring = { rePassword: '' };
      this.loading$.startLoading();
      this.auth$
        .createUser(this.profileForm.value, localStorage.getItem('client'))
        .subscribe(
          ele => {
            console.log(this.profileForm.value);

            this.loading$.stopLoading();
            this.registerSuccess = true;
            // setTimeout(() => {
            this.router.navigateByUrl('user/list');
            // }, 2000);
          },
          error => {
            this.loading$.stopLoading();
            console.log(error);
            this.waring = error.error;
            console.log(this.waring);
          }
        );
    }
  }
}
