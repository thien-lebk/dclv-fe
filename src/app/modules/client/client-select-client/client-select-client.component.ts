import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dc-client-select-client',
  templateUrl: './client-select-client.component.html',
  styleUrls: ['./client-select-client.component.scss']
})
export class ClientSelectClientComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      localStorage.setItem('client', params.name);
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['client/list']))
        .then(ele => {
          window.location.reload();
        });
    });
  }
}
