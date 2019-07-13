import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../service/user-details.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-sub-details',
  templateUrl: './user-sub-details.component.html',
  styleUrls: ['./user-sub-details.component.scss']
})
export class UserSubDetailsComponent implements OnInit {
  todoData: any;
  id: any;

  constructor(private userDetailsService: UserDetailsService, 
    private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.getProducts(this.id)
      });
  }
  getProducts(id?: any) {
    this.userDetailsService.getProducts(id).subscribe(
      (res) => {
        console.log(res);
        this.todoData = res;
      },
      (err) => {
        console.log(err);
      });
  }
}