/* eslint-disable max-len */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
public newArrival=[];
public product=[];
slideOpts = {
  initialSlide: 0,
  speed: 1000
};
  constructor() { }

  ngOnInit() {
    this.newArrival=[
      {name:'little',image:'/assets/image/little.jpg'},
      {name:'Twinkle',image:'/assets/image/twinkle.jpg'},
      {name:'Glossy',image:'/assets/image/Glossy.jpg'},
      {name:'Picku',image:'/assets/image/Picku.jpg'},
  ];


}



}
