import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { InfoComponent } from './components/info/info.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { DisplayElementComponent } from './components/display-element/display-element.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { EspacePipe } from './pipes/espace.pipe';
import { VoyellesPipe } from './pipes/voyelles.pipe';
import { MatchPageComponent } from './components/match-page/match-page.component';
import { MatchItemComponent } from './components/match-item/match-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    InfoComponent,
    MatchInfoComponent,
    BlogComponent,
    ArticleComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    AddTeamComponent,
    TitleHeaderComponent,
    DisplayMatchComponent,
    AddMatchComponent,
    DisplayElementComponent,
    ReversePipe,
    EspacePipe,
    VoyellesPipe,
    MatchPageComponent,
    MatchItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
