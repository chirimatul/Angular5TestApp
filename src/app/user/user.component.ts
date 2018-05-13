import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { UserchildComponent } from './userchild/userchild.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [LoginService]
})
export class UserComponent implements OnInit {

  fromservice: string;
  parentTest: string;
  user: User;
  contries: string[] = ['India', 'UK', 'US'];
  skills:string[]=["swimming","singing", "cycling"];
  constructor(loginService: LoginService) {
    this.fromservice = loginService.getUsername();
    this.user = new User();
    this.user.userName = "Atul";
    this.user.country = "US";
    this.user.dob = new Date("2018-5-5");
    this.user.favouriteColor = "#ffffff";
    this.user.gender = false;
    this.user.roles = [];
    
    this.user.Cancycle=true;
  }

  @ViewChildren(UserchildComponent)
  childComponents: QueryList<UserchildComponent>;
  queryChild() {
    this.childComponents.forEach(alertInstance =>
      console.log(alertInstance.componentDate)
    );
  }



  
  ngOnInit() {

  }



}
