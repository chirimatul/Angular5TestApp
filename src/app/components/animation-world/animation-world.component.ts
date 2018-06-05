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
      // transition('active => inactive', [
      //   style({
      //     backgroundColor: 'red',
      //     transform: 'scale(1)'
      //   }),
      //   animate('1000ms ease-in', style({
      //     backgroundColor: 'yellow',
      //     transform: 'scale(1.3)'
      //   }))
      // ])
      state('active', style({
        backgroundColor: "red",
        transform: 'scale(1)'
      })),
      state('inactive', style({
        backgroundColor: "yellow",
        transform: 'scale(2)'
      })),
      transition('active<=>inactive', animate('500ms ease-in')),
      transition('inactive=>active', animate('500ms ease-out')),
    ]),
    trigger('flyInOut', [ 
      state('in', style({transform: 'translateX(0)'})),
      // transition('void => *', [
      //   style({transform: 'translateX(-600%)'}),
      //   animate('1000ms ease-in')
      // ]),
      // transition('* => void', [
      //   animate('1000ms ease-in', style({transform: 'translateX(400%)'}))
      // ])
      // transition(':enter', [ animate('1000ms ease-in',style({transform: 'translateX(-100%)'})]),// void => *
      // transition(':leave', [ style({transform: 'translateX(400%)'})]) // * => void
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
  onmouseLeave() {
    this.state = this.state === "active" ? "inactive" : "active";
  }
  

  animationStart(obj){
    alert('animation started');
  }


  animationDone(obj){
    alert('animation done');
  }
}
