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
import { RoleService } from '../_services/role-service';

@Component({
  selector: 'dc-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  constructor(
    private auth$: RoleService,
    private router: Router,
    private loading$: LoadingService
  ) {}
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    lock: faLock,
    user: faUser,
    phone: faPhone,
    userAlt: faUserPlus
  };
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  waring: any;
  registerSuccess: any;
  ngOnInit(): void {}
  onSubmit(): void {
    // email: "thientest3@gmail.com"
    // id: "a64335d3-935e-4371-bed6-711671183fee"
    // is_active: true
    // last_login: null
    // name: "thien"
    // phone: "0394946767"
    // username: null
    // this.profileForm.value.users = [];
    // this.profileForm.value.permissions = [];

    this.waring = { rePassword: '' };
    this.loading$.startLoading();
    this.auth$
      .createRole(this.profileForm.value, localStorage.getItem('client'))
      .subscribe(
        ele => {
          console.log(this.profileForm.value);

          this.loading$.stopLoading();
          this.registerSuccess = true;
          // setTimeout(() => {
          this.router.navigateByUrl('role/list');
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
