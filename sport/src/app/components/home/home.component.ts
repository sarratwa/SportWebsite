import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  match = {teamOne:'A', teamTwo:'B', scoreOne:'2', scoreTwo:'1'};
  constructor() { }

  ngOnInit() {
  }

}
