import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players : any[];
  constructor(
    private router: Router,
    private playerService : PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayeres().subscribe(
      (data)=>{
        this.players = data.players;
      }
    );
  }

  Display(id : number, t : string){
    this.router.navigate([`player/${id}/${t}`]);
  }

  Edit(id : number){
    this.router.navigate([`editPlayer/${id}`]);
  }

  Delete(id : number){
    //this.players.splice(id,1);
    //localStorage.setItem('matches',JSON.stringify(this.players));
    this.playerService.deletePlayer(id).subscribe(
      (data)=> {
        console.log('Data from BE', data.message);
        this.playerService.getAllPlayeres().subscribe(
          (data)=>{
            this.players = data.players;
          }
        );
      }
    );
  }

}
