import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() title: any;
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  click(): void {
    this.sendData.emit('Home Click');
  }
}
