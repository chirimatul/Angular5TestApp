import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {

  @Output()
  onPlayerSelected = new EventEmitter<Player>();

  players: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  playerSelected(player:Player){
    this.onPlayerSelected.emit(player);
  }

}
