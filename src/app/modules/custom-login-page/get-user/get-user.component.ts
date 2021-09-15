import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obj = {
      name: 'Torsten',
      age: 54
    };
    const thefile = new Blob([JSON.stringify(obj)], { type: 'application/json' }) ;
    const url = window.URL.createObjectURL(thefile);
    window.location.href = url;
  }

}
