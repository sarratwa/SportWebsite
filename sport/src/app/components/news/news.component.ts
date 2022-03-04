import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  infos:any=[];
  constructor() { }

  ngOnInit() {
    this.infos= [
      {id : 1, img:'assets/images/person_1.jpg', question:'Messi still at FCB?', name: 'Melissa', date:'08/08/2021', avatar:'assets/images/img_1.jpg'}, 
      {id:2, img:'assets/images/person_2.jpg', question:'xxx xxxx xxxxxx?', name: 'Melissa', date:'08/08/2021', avatar:'assets/images/img_2.jpg'}, 
      {id:3, img:'assets/images/person_3.jpg', question:'yy yyyy yyyyyy yyy?', name: 'Melissa', date:'08/08/2021', avatar:'assets/images/img_3.jpg'}];
  }

}
