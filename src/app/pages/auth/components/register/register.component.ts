import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faUserPlus,
  faAddressCard,
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService, CredentialsService } from '@app/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingService } from '@app/shared/loader/_services/loading-services';

@Component({
  selector: 'dc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    lock: faLock,
    user: faUser,
    phone:faPhone,
    userAlt:faUserPlus,
  };
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    repassword: new FormControl(''),
  });
  registerSuccess = false;
  waring: any;
  constructor(
    private auth$: AuthenticationService,
    private cre$: CredentialsService,
    private router: Router,
    private loading$: LoadingService,
  ) {}

  ngOnInit() {
    // this.router.navigateByUrl('auth/login');

    if (this.cre$.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }

  }
 
  onSubmit(): void {
    // email: "thientest3@gmail.com"
    // id: "a64335d3-935e-4371-bed6-711671183fee"
    // is_active: true
    // last_login: null
    // name: "thien"
    // phone: "0394946767"
    // username: null    
    if(this.profileForm.value.password !== this.profileForm.value.repassword){
      this.waring = {rePassword:'Passwords must match'};
    } else{
      this.waring = {rePassword:''};
      this.loading$.startLoading();
    this.auth$.register(this.profileForm.value).subscribe(
      ele => {
        this.loading$.stopLoading();
        this.registerSuccess = true;
        setTimeout(()=>{ 
          this.router.navigateByUrl('auth/login');
      }, 2000);

        
      },
      error => {
        this.loading$.stopLoading();
        console.log(error);
        this.waring = error.error;
        console.log(this.waring);
      });
    }
    
  }
}
