import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animation-world',
  templateUrl: './animation-world.component.html',
  styleUrls: ['./animation-world.component.css'],
  animations: [
    trigger('btnAnimate', [
      state('active', style({
        backgroundColor: "red",
        marginLeft:'10px',
        marginTop:'10px',
        transform: 'scale(1)'
      })),
      state('inactive', style({
        backgroundColor: "yellow",
        marginLeft:'600px',
        marginTop:'100px',
        transform: 'scale(2)'
      })),
      transition('active<=>inactive', animate('3000ms ease-in')),
      transition('inactive=>active', animate('3000ms ease-out')),
    ])
  ]
})
export class AnimationWorldComponent implements OnInit {

  constructor() { }
  state = "active";
  ngOnInit() {
  }
  onmouseEnter() {
    this.state = this.state === "active" ? "inactive" : "active";
  }
  // onmouseLeave() {
  //   this.state = this.state === "active" ? "inactive" : "active";
  // }
  
}
