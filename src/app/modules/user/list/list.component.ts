import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user-service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  GetListUserDto,
  GetParamListUser
} from '@app/modules/user/_dto/get-list-user-dto';
import { LoadingService } from '@app/shared/loader/_services/loading-services';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PaginationDto } from '@app/shared/dto/pagination-dto';

@Component({
  selector: 'dc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  currItem: any;
  listItem: GetListUserDto[];
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
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    this.loadingService.startLoading();
    this.getParam.ordering = 'email';
    this.app$.getListUser(this.currItem, this.getParam).subscribe(data => {
      this.listItem = data.results;
      this.drawnList = data.results;
      this.totalItem = data.count;
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
}
