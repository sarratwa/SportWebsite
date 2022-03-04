import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayElementComponent } from './components/display-element/display-element.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchPageComponent } from './components/match-page/match-page.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'addPlayer', component:AddPlayerComponent},
  {path:'admin', component:AdminComponent},
  {path:'addTeam', component:AddTeamComponent},
  {path:'match/:id', component:DisplayMatchComponent},
  {path:'addMatch', component:AddMatchComponent},
  {path:'editMatch/:id', component:AddMatchComponent},
  {path:'player/:id/:name', component:DisplayElementComponent},
  {path:'editPlayer/:id', component:AddPlayerComponent},
  {path:'addTeam/:id', component:AddTeamComponent},
  {path:'team/:id/:name', component:DisplayElementComponent},
  {path:'matches',component: MatchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
