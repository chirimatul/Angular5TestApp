import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

user:User;
  constructor() {
   
    this.user = new User();
    this.user.userName="Atul";
    this.user.country="India";
    this.user.dob = new Date("2018-5-5");
    this.user.favouriteColor="#ffffff";
    this.user.gender = true;
    this.user.roles=[];
   }

  ngOnInit() {
  }

}
