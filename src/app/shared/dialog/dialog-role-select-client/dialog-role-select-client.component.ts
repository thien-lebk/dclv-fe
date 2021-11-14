import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  GetListUserDto,
  GetParamListUser
} from '@app/modules/user/_dto/get-list-user-dto';
import { PaginationDto } from '@app/shared/dto/pagination-dto';
import { UserService } from '@app/modules/user/_services/user-service';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { PageEvent } from '@angular/material/paginator';
import { GetUserDetailDto } from '@app/modules/user/_dto/get-user-detail-dto';
import { DialogRoleSelectClientDto } from '@app/shared/dialog/dialog-role-select-client/.dto/dialog-role-select-client.dto';

@Component({
  selector: 'dc-dialog-role-select-client',
  templateUrl: './dialog-role-select-client.component.html',
  styleUrls: ['./dialog-role-select-client.component.scss']
})
export class DialogRoleSelectClientComponent implements OnInit {
  currItem: any;
  listItem: DialogRoleSelectClientDto[];
  listSelectedOutPut: DialogRoleSelectClientDto[] = [];
  listDeletedOutPut: DialogRoleSelectClientDto[] = [];
  drawnList: PaginationDto[];

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];

  getParam = new GetParamListUser();
  currSortValue: string;
  paramSearch: string;
  searchType: string;
  totalItem: number;

  constructor(
    private app$: UserService,
    private loadingService: LoadingService,
    public dialogRef: MatDialogRef<DialogRoleSelectClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogRoleSelectClientDto[]
  ) {}

  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.getParam.ordering = 'email';
    this.app$.getListUser(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawnList = data.results;
      this.totalItem = data.count;
      this.listItem.forEach(ele => {
        const indexSelected = this.data.findIndex(eleData => {
          return eleData.id === ele.id;
        });
        if (indexSelected !== -1) {
          ele.isSelected = true;
        } else {
          ele.isSelected = false;
        }
      });
      this.loadingService.stopLoading();
    });
  }
  onClickSort(param: string) {
    this.loadingService.startLoading();
    if (param !== this.currSortValue) {
      this.currSortValue = param;
    } else {
      this.currSortValue = null;
    }
    this.getParam.ordering = this.currSortValue;
    this.app$.getListUser(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawnList = data.results;
      this.loadingService.stopLoading();
    });
  }

  onChangeSearch() {
    this.getParam.search = this.paramSearch;
    this.loadingService.startLoading();
    this.app$.getListUser(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawnList = data.results;
      this.loadingService.stopLoading();
    });
  }

  onChangePaging(pageEvent: PageEvent) {
    this.getParam.limit = pageEvent.pageSize;
    this.getParam.page = pageEvent.pageIndex + 1;
    this.loadingService.startLoading();
    this.app$.getListUser(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawnList = data.results;
      this.loadingService.stopLoading();
    });
  }

  onChangeSelect(item: DialogRoleSelectClientDto) {
    if (item.isSelected) {
      if (this.data.findIndex(ele => ele.id === item.id) === -1) {
        this.data.push(item);
      }
      // // checkInDeletedList
      // if(this.listDeletedOutPut.findIndex(ele=>ele.id === item.id) !== -1){
      //   this.listDeletedOutPut =  this.listDeletedOutPut.filter(ele=> ele.id !== item.id);
      // }
      //
      // if(this.listSelectedOutPut.findIndex(ele=>ele.id === item.id) === -1){
      //   this.listSelectedOutPut.push(item);
      // }
    } else {
      if (this.data.findIndex(ele => ele.id === item.id) !== -1) {
        this.data = this.data.filter(ele => ele.id !== item.id);
      }
      // checkInSelectList
      //   if(this.listSelectedOutPut.findIndex(ele=>ele.id === item.id) !== -1){
      //     this.listSelectedOutPut =  this.listSelectedOutPut.filter(ele=> ele.id !== item.id);
      //     console.log( this.listSelectedOutPut );
      //   }
      //   if(this.listDeletedOutPut.findIndex(ele=>ele.id === item.id) === -1){
      //     if(this.data.findIndex(ele=>ele.id === item.id) === -1){
      //       this.listDeletedOutPut.push(item);
      //     }
      //   }
    }
  }

  closeDialog() {
    return this.data;
  }
}
