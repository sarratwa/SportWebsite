import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {

  @Input() matchInfo : any = {};
  constructor() { }

  ngOnInit() {
  }

}
