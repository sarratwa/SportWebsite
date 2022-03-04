import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles : any = [];
  constructor() { }

  ngOnInit() {
    this.articles= [
      {id : 1, img:'assets/images/img_3.jpg', question:'Romolu to stay at Real Nadrid?', date:'May 20, 2020'}, 
      {id : 2, img:'assets/images/img_2.jpg', question:'ccccc?', date:'May 20, 2020'}, 
      {id : 3, img:'assets/images/img_1.jpg', question:'Rhhhhh?', date:'May 20, 2020'}];
  }
}