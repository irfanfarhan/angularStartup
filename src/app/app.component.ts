import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Angular Startup';
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.navigate(['dashboard']);
  }
  ngOnChanges(changes: any) { }
  sendData(event?: any, extra?: any): void {
    this.title = event + extra;
  }
}
