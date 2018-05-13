import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userchild',
  templateUrl: './userchild.component.html',
  styleUrls: ['./userchild.component.css']
})
export class UserchildComponent {
  OpenAlert(str: string) {
    alert(str);
  }
  componentDate = new Date();
}
