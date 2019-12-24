import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerColor = '#0080ff';

  getHeaderColor(){
    return this.headerColor;
  }
  constructor() { }

  ngOnInit() {
  }

}
