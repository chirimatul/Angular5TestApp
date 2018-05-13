import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
  //styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  selectedPlayer: Player;
  title = 'app';
  test = "angular";
  userName = "new user";

  constructor(private service: UserService, private rtr: UserService) {
    console.log('App component I am in ctor');

  }

  onPlayerSelected(player: Player) {
    this.selectedPlayer = player;
  }
  validateMe() {
    debugger

    this.userName = 'angular new user';
  }

  serviceUserName: string;
  ngOnInit() {
    this.serviceUserName = this.service.getUser();
  }

}
