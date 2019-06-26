import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId: any;
  employeeCode: any;

  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.userId = params['xyz'];
      });
    this.route.queryParams.subscribe(
      queryParams => {
        this.employeeCode = queryParams['employeeCode'];
      });
  }

}
