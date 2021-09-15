import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  isOpenUserPopup = false;

  ngOnInit(): void {

  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }

}
