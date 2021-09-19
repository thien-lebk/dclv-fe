import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private client$: ClientService,
  ) {
  }

  listItem = [];
  curList = [];
  currItem = {
    name: 'Client name',
    mode: 'Develop',
  };
  isOpenUserPopup = false;

  ngOnInit(): void {
    this.client$.getClientList().subscribe(data => {
      this.listItem = data.results;
      this.curList = data.results;

    });
  }

  changeSeachForm(data): void {
    const e = data.target.value;
    this.listItem = this.curList.filter(ele => {
      return ele.name.indexOf(e) !== -1 || ele.schema_name.indexOf(e) !== -1;
    });
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }

  changeItem(name, schema): void {
    this.currItem.name = name;
    this.currItem.mode = schema;
  }
}
