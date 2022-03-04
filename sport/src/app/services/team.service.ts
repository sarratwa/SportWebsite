import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl : string = 'http://localhost:3000/teams';
  constructor(private htppClient  :HttpClient) { } 
  addTeam(Team : any){
    return(this.htppClient.post(this.teamUrl,Team));
  }

  editTeam(Team : any){
    return (this.htppClient.put(`${this.teamUrl}/${Team.id}`,Team));
  }

  getAllTeames(){
    return(this.htppClient.get<{teams:any}>(this.teamUrl));
  }

  getTeamById(id : any){
    return(this.htppClient.get(`${this.teamUrl}/${id}`));
  }

  deleteTeam(id:any){
    return (this.htppClient.delete<{message : String}>(`${this.teamUrl}/${id}`));
  }
}
