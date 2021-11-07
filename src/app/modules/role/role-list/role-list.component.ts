import { Component, OnInit } from '@angular/core';
import { RoleService } from '../_services/role-service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { Client, ClientDto } from '@app/modules/client/_modal/client-modal';
import { Domain } from '@app/modules/client/_modal/domain-modal';
import { MainSource } from '@app/core/authentication/_source';
import { LoadingService } from '@app/shared/loader/_services/loading-services';

@Component({
  selector: 'dc-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  faBars = faBars;

  currItem: any;
  listItem: any;

  toggleForm = false;
  hoverCopyContent = 'Copy';
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  constructor(
    private role$: RoleService,
    private loadingService: LoadingService
  ) {}
  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.role$.getListRole(this.currItem).subscribe(data => {
      this.listItem = data.results;
      this.loadingService.stopLoading();
    });
  }

  onSubmit(): void {
    this.loadingService.startLoadingForm();
    const clientDto: ClientDto = new ClientDto();
    clientDto.name = this.profileForm.value.name;
    clientDto.schema_name = clientDto.name;
    // this.waring = { rePassword: '' };
    this.loadingService.startLoading();
    this.role$
      .createRole(this.profileForm.value, localStorage.getItem('client'))
      .subscribe(
        ele => {
          console.log(this.profileForm.value);
          this.listItem.push(this.profileForm.value);
          this.loadingService.stopLoading();
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
