import { Component, OnInit } from '@angular/core';
import { MainSource } from '@app/core/authentication/_source';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/modules/user/_services/user-service';
import { GetUserDetailDto } from '@app/modules/user/_dto/get-user-detail-dto';
import { FormControl, FormGroup } from '@angular/forms';
import {
  faLock,
  faLongArrowAltRight,
  faPhone,
  faUser,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { AlertServices } from '@app/modules/alert/_service/alert-services';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'dc-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    lock: faLock,
    user: faUser,
    phone: faPhone,
    userAlt: faUserPlus
  };
  profileForm = new FormGroup({
    id: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    name: new FormControl(),
    phone: new FormControl(),
    last_login: new FormControl(),
    is_active: new FormControl()
  });
  waring: any;
  registerSuccess: any;
  userDetailDto: GetUserDetailDto;
  constructor(
    private loading$: LoadingService,
    private route: ActivatedRoute,
    private user$: UserService,
    private aler$: AlertServices
  ) {}
  ngOnInit(): void {
    this.loading$.startLoading();
    this.route.params.subscribe(params => {
      this.user$.getDetailUser(params.id).subscribe(res => {
        this.userDetailDto = res;
        this.profileForm.setValue(this.userDetailDto);
        this.loading$.stopLoading();
      });
    });
  }

  onSubmit(): void {
    if (this.profileForm.value.password !== this.profileForm.value.repassword) {
      this.waring = { rePassword: 'Passwords must match' };
    } else {
      this.waring = { rePassword: '' };
      this.loading$.startLoading();
      this.user$
        .updateUser(
          this.profileForm.value,
          localStorage.getItem('client'),
          this.userDetailDto.id
        )
        .subscribe(
          ele => {
            this.aler$.success('Update success');
            this.loading$.stopLoading();
            this.registerSuccess = true;
            // setTimeout(() => {
            // this.router.navigateByUrl('user/list');
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

  changeSlideStogger($event: MatSlideToggleChange) {
    console.log($event);
    this.profileForm.patchValue({ is_active: $event.checked });
  }
}
