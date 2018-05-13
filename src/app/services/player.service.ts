import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers():Player[]{

    let players:Player[]=[];
    
    players.push(new Player(10,"Sachin","Tendulkar","Cricket",new Date("1980-05-25")));
    players.push(new Player(11,"Virat","kohli","Cricket",new Date()));
    players.push(new Player(12,"Messey","Liu","Football",new Date()));
    players.push(new Player(13,"major","dhyanchand","Hockey",new Date()));

    return players;
  }
}
