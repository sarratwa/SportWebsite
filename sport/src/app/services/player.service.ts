import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl : string = 'http://localhost:3000/players';
  constructor(private htppClient  :HttpClient) { }

  addPlayer(Player : any){
    return(this.htppClient.post(this.playerUrl,Player));
  }

  editPlayer(Player : any){
    return (this.htppClient.put(`${this.playerUrl}/${Player.id}`,Player));
  }

  getAllPlayeres(){
    return (this.htppClient.get<{players:any}>(this.playerUrl));  }

  getPlayerById(id : any){
    return(this.htppClient.get(`${this.playerUrl}/${id}`));
  }

  deletePlayer(id:any){
    return (this.htppClient.delete<{message : String}>(`${this.playerUrl}/${id}`));
  }
}
