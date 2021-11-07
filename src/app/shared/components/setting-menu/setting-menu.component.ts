import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-setting-menu',
  templateUrl: './setting-menu.component.html',
  styleUrls: ['./setting-menu.component.scss']
})
export class SettingMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(123);
  }
}
