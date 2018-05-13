import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HtmlControlsComponent } from './html-controls/html-controls.component';
import { UserService1Service } from './user-service1.service';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { User1Component } from './components/user1/user1.component';
import { TestComponent } from './test.component';
import { UserchildComponent } from './user/userchild/userchild.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';


@NgModule({
  declarations: [
    AppComponent,
    HtmlControlsComponent,
    UserComponent,
    UserchildComponent,
    PlayerComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
