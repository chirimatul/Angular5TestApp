
import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player:Player;
  constructor() {

    this.player = new Player(10,"Sachin","Tendulkar","Cricket",new Date("1980-05-25"))
   }

  ngOnInit() {
  }

  addPlayer(){
    alert("Form is submitted");
  }
}
