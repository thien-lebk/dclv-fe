import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RoleService } from '@app/modules/role/_services/role-service';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientDto } from '@app/modules/client/_modal/client-modal';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { AlertServices } from '@app/modules/alert/_service/alert-services';

@Component({
  selector: 'dc-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private role$: RoleService,
    private loadingService: LoadingService,
    private alert$: AlertServices
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.role$.getDetailRole(this.id).subscribe(
        res => {
          console.log(this.profileForm.value);
          this.loadingService.stopLoading();
          this.profileForm.patchValue(res);
        },
        error => {
          this.alert$.error(error.error.detail);
          this.router.navigateByUrl('role/list');
        }
      );
    });
  }
  onDelete(): void {
    this.role$.deleteRole(localStorage.getItem('client'), this.id).subscribe(
      ele => {
        this.loadingService.stopLoading();
        this.alert$.success('Delete Success');
        this.router.navigateByUrl('role/list');
      },
      error => {
        this.loadingService.stopLoading();
        this.alert$.error(error.error.detail);
        console.log(123);
        console.log(error.error.detail);
        // this.waring = error.error;
        // console.log(this.waring);
      }
    );
  }
  onSubmit(): void {
    this.loadingService.startLoadingForm();
    const clientDto: ClientDto = new ClientDto();
    clientDto.name = this.profileForm.value.name;
    clientDto.schema_name = clientDto.name;
    // this.waring = { rePassword: '' };
    this.loadingService.startLoading();
    this.role$
      .updateRole(
        this.profileForm.value,
        localStorage.getItem('client'),
        this.id
      )
      .subscribe(
        ele => {
          this.loadingService.stopLoading();
          this.alert$.success('Update Success');
        },
        error => {
          this.loadingService.stopLoading();
          console.log(error);
          // this.waring = error.error;
          // console.log(this.waring);
        }
      );
  }
}
