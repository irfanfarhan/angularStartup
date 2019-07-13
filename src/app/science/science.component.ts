import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../service/user-details.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'],
})
export class ScienceComponent implements OnInit {
  todoList: any;

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.userDetailsService.getProducts().subscribe(
      (res) => {
        console.log(res);
        this.todoList = res;
      },
      (err) => {
        console.log(err);
      });
  }
}