import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user-service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'dc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  currItem: any;
  listItem: any;
  toppings = new FormControl();

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];
  constructor(private app$: UserService) {}
  ngOnInit(): void {
    this.currItem = localStorage.getItem('client');
    // this.loadingService.startLoading();
    this.app$.getListApp(this.currItem).subscribe(data => {
      this.listItem = data.results;
      console.log(this.listItem);

      // this.loadingService.stopLoading();
    });
  }
}
