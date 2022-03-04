import { Component, Input, OnInit } from '@angular/core';

  @Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput;
  result : any = 0;
  constructor() { }

  ngOnInit() {/*
    if (this.matchInput.scoreOne < this.matchInput.scoreTwo) {
      this.result = 2;
    }else if (this.matchInput.scoreOne > this.matchInput.scoreTwo) {
      this.result = 1;
    }else {
      this.result = 0;
    }*/
  }

}
