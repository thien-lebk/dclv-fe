import { Component, Input, OnInit } from '@angular/core';
import { AppcreateDto } from '@app/modules/app-create/_modal/app-create-dto';
import { AppCreateService } from '@app/modules/app-create/_services/app-create-service';
import { Client } from '@app/modules/client/_modal/client-modal';
import { ClientService } from '@app/modules/client/_services/client-service';
import { LoadingService } from '@app/shared/loader/_services/loading-services';

@Component({
  selector: 'dc-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.scss']
})
export class MenuClientComponent implements OnInit {
  @Input() dynamic = false;
  @Input() currItem;

  listItem: AppcreateDto[] = [];
  curList = [];

  listClientItem: Client[] = [];
  isOpenUserPopup = false;

  hoverCopyContent = 'Copy';
  isLoadingClient = false;
  constructor(
    private app$: AppCreateService,
    private loadingService: LoadingService,
    private client$: ClientService
  ) {}
  changeSeachForm(data: any): void {
    const e = data.target.value;
    this.listClientItem = this.curList.filter(ele => {
      return ele.name.indexOf(e) !== -1;
    });
  }

  changeItem(name: any): void {
    this.currItem = this.curList.find(ele => ele.name === name);
    localStorage.setItem('client', name);
    this.loadingService.startLoading();
    this.app$.getListApp(this.currItem.name).subscribe(data => {
      this.listItem = data.results;
      this.loadingService.stopLoading();
    });
    window.location.reload();
  }
  ngOnInit(): void {
    if (!this.dynamic) {
      this.currItem = localStorage.getItem('client');
      this.loadingService.startLoading();
      this.app$.getListApp(this.currItem).subscribe(data => {
        this.listItem = data.results;
        this.loadingService.stopLoading();
      });
      this.isLoadingClient = true;
      this.client$.get().subscribe(data => {
        this.listClientItem = data.results;
        this.curList = data.results;
        this.currItem = this.listClientItem.find(ele => {
          return ele.name === this.currItem;
        });
        this.isLoadingClient = false;
      });
    }
  }
}
