import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,  OnDestroy {
  userId: any;
  employeeCode: any;
  href: string;
  currentRoute: string;
  data: any ='';
  sub: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    this.currentRoute = this.route.snapshot.url[0].path;
    this.sub = this.route.params.subscribe(
      params => {
        this.userId = params['xyz'];
      });
    this.route.queryParams.subscribe(
      queryParams => {
        this.employeeCode = queryParams['employeeCode'];
      });
  }
  change(event?: any){
    if(event){
      this.currentRoute = event.target.value;
    }
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
