import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-html-controls',
  templateUrl: './html-controls.component.html',
  styleUrls: ['./html-controls.component.css']
})
export class HtmlControlsComponent implements OnInit, OnDestroy {
  

  constructor() { 
    console.log('In constructor');
  }

  countries:string[]=['india','US','UK','Canada','France'];
  selectedCountry:string="india";
  userGender:string="female";

  userRole1:boolean=true;
  userRole2:boolean=true; 
  bdate:String= "2019-06-01";
  bkColor:string="#4289bd";
  customClass:string="customClass";
  isSelected = false;
  
  ngOnInit() {
    console.log('in on init');
  }

  ngOnDestroy(): void {
    console.log('I am destroyed');
  }
}
