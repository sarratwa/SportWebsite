import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { TitleHeaderComponent } from '../title-header/title-header.component';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  id : any;
  matches:any;
  findedMatch:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService : MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    /*this.matches = JSON.parse(localStorage.getItem('matches') || '1' );
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id == this.id ) {
        this.findedMatch = this.matches[i];
        break;
      }
    }*/

    //console.log('finded match', this.findedMatch);
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log('data', data);
        
        this.findedMatch = data.match;
      }
    );
  }

}
