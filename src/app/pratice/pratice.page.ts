import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.page.html',
  styleUrls: ['./pratice.page.scss'],
})
export class PraticePage implements OnInit {
 public pratice=[];
  constructor() { }

  ngOnInit() {
    this.pratice=[
      {name:'papu',age:'21',sex:'male'},
      {name:'alok',age:'28',sex:'male'},
      {name:'siba',age:'26',sex:'male'},
      {name:'utsha',age:'26',sex:'male'},

    ];

  }

}
