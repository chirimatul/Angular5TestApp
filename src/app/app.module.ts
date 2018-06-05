import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HtmlControlsComponent } from './html-controls/html-controls.component';

import { UserComponent } from './user/user.component';
import { User1Component } from './components/user1/user1.component';
import { UserchildComponent } from './user/userchild/userchild.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { UserDivDirective } from './directives/user-div.directive';
import { TestCComponent } from './components/test-c/test-c.component';
import { UserCustomDirective } from './directives/user-custom.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomDirective } from './directives/custom.directive';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AppIfDirective } from './directives/app-if.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { ReactiveExampleComponent } from './components/reactive-example/reactive-example.component';
import { AnimationWorldComponent } from './components/animation-world/animation-world.component';
import { TemplateUserComponent } from './components/template-user/template-user.component';
import { UserReactiveComponent } from './components/user-reactive/user-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HtmlControlsComponent,
    UserComponent,
    UserchildComponent,
    PlayerComponent,
    PlayersComponent,
    UserDivDirective,
    TestCComponent,
    UserCustomDirective,
    CustomPipe,
    CustomDirective,
    PlayerFormComponent,
    AppIfDirective,
    CustomIfDirective,
    // ReactiveExampleComponent,
    // AnimationWorldComponent,
    TemplateUserComponent,
    UserReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
