import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Player } from './models/player';
import { PlayerService } from './services/player.service';
import { PlayerComponent } from './components/player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PlayerService]
  //styleUrls: ['./app.component.css']

})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewInit, AfterViewChecked, OnDestroy {
  num: string = "10";
  testv = "56";
  showDiv = false;
  isAdmin= false;

  

  userRole="admin";
  //pink="pink";
  //   color: string = "yellow";

  // userImg = 'img\\user.jpg';
  // selectedPlayer: Player;
  // title = 'app';
  // test = "angular";
  // userName = "new user";
  //color = "skyblue";

  // amazing = "8888";
  // removeC = true;

  @ViewChildren(PlayerComponent)
  playerComponents:
  QueryList<PlayerComponent>;

  onclick(){
    debugger
    var test = this.playerComponents;
    
    this.playerComponents.forEach
    (element => {
      
      element.setLog();
    });
    //.setLog();
    // ref.setLog()
  }

  playerList = [];
  constructor(private playerService: 
    PlayerService) {
    
    this.playerList = playerService.
    getPlayers();

    
  }
  execute(value: string) {
    alert(value);
  }

  
  // onPlayerSelected(player: Player) {
  //   this.selectedPlayer = player;
  // }
  // validateMe() {


  //   this.userName = 'angular new user';
  // }


  // removeChild() {
  //   this.removeC = false;
  // }

  serviceUserName: string;

  // btnClickMe() {
  //   this.amazing = "clicked button";
  // }

  ngOnChanges() {
    this.writeLog("App onchanges");
  }

  ngOnInit() {
    this.writeLog("app on it ");
  }

  ngDoCheck() {
    this.writeLog("app do check");
  }

  ngAfterContentInit() {
    this.writeLog("app after content init");
  }

  ngAfterContentChecked() {
    this.writeLog("app after content checked");
  }

  ngAfterViewInit() {
    this.writeLog("app after view init");
  }

  ngAfterViewChecked() {
    this.writeLog("app after view checked");
  }


  ngOnDestroy() {
    this.writeLog("app ng destroy");
  }






  private writeLog(msg: string) {
    console.log(msg);
  }

}
