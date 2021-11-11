import { Component, OnInit } from '@angular/core';
import {
  faLock,
  faLongArrowAltRight,
  faPhone,
  faUser,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { GetUserDetailDto } from '@app/modules/user/_dto/get-user-detail-dto';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/modules/user/_services/user-service';
import { AlertServices } from '@app/modules/alert/_service/alert-services';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ProfileService } from '@app/modules/profile/_services/profile.service';

@Component({
  selector: 'dc-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
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
    private aler$: AlertServices,
    private profile$: ProfileService
  ) {}
  ngOnInit(): void {
    console.log(213);
    this.loading$.startLoading();
    this.route.params.subscribe(params => {
      this.profile$.getDetailUser().subscribe(res => {
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
      this.profile$.updateUser(this.profileForm.value).subscribe(
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
