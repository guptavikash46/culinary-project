import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerColor = '#0080ff';
  @Output() featureSelect = new EventEmitter<string>();

  getHeaderColor(){
    return this.headerColor;
  }
  // onSelect(feature : string){
  //   this.featureSelect.emit(feature);
  // }
  
  constructor() { }

  ngOnInit() {
  }

}
