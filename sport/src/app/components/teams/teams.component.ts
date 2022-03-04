import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams : any;
  constructor(
    private router : Router,
    private teamService : TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeames().subscribe(
      (data)=>{
        this.teams = data.teams;
      }
    );
  }

  Display(id : number, name: string){
    this.router.navigate([`team/${id}/${name}`])
  }

  Edit(id: number){
    this.router.navigate([`addTeam/${id}`]);
  }

  Delete(id: number){
    //this.teams.splice(id, 1);
    //localStorage.setItem('teams', JSON.stringify(this.teams));
    this.teamService.deleteTeam(id).subscribe(
      (data)=> {
        console.log('Data from BE', data.message);
        this.teamService.getAllTeames().subscribe(
          (data)=>{
            this.teams = data.teams;
          }
        );
      }
    );
  }

}
