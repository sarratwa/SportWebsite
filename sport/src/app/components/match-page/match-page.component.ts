import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent implements OnInit {

  t : string = "Matches";
  constructor() { }

  ngOnInit() {
  }

}
