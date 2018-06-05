import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-user',
  templateUrl: './template-user.component.html',
  styleUrls: ['./template-user.component.css']
})
export class TemplateUserComponent 
implements OnInit {
  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  saveUser(){
    debugger

  }
}

class User {
  fName="atul";
  lName="chirame";
}