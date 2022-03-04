import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css']
})
export class DisplayElementComponent implements OnInit {

  id : any;
  t : string;
  item : string;
  element : any ;
  findedE:any;
  info : any ={};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.t = this.activatedRoute.snapshot.paramMap.get('name');
    this.item= this.t+'s';
    this.element = JSON.parse(localStorage.getItem(this.item) || '1' );
    for (let i = 0; i < this.element.length; i++) {
      if (this.element[i].id == this.id ) {
        this.findedE = this.element[i];
        break;
      }
    }
    if (this.t == "player"){
      this.info.name= this.findedE.name;
      this.info.i1= "Post : "+this.findedE.post;
      this.info.i2= "Number : "+this.findedE.nbr;
      this.info.i3= "Age : "+this.findedE.age;
    }else {
      this.info.name= this.findedE.name;
      this.info.i1= "Foundation : "+this.findedE.foundation;
      this.info.i2= "Stadium : "+this.findedE.stadium;
      this.info.i3= "Owner : "+this.findedE.owner;
    }
  }

}
