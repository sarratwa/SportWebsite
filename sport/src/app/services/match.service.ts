import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl : string = 'http://localhost:3000/matches';
  constructor(private htppClient  :HttpClient) { }

  addMatch(match : any){
    return(this.htppClient.post(this.matchUrl,match));
  }

  editMatch(match : any){
    return (this.htppClient.put<{message: any}>(`${this.matchUrl}/${match._id}`,match));
  }

  getAllMatches(){
    return (this.htppClient.get<{matches:any}>(this.matchUrl));
  }

  getMatchById(id : any){
    return(this.htppClient.get<{match : any}>(`${this.matchUrl}/${id}`));
  }

  deleteMatch(id:any){
    return (this.htppClient.delete<{message : String}>(`${this.matchUrl}/${id}`));
  }
}
