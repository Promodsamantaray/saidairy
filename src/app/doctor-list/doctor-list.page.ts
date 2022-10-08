/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage implements OnInit {
   public doctor=[];
  constructor() { }

  ngOnInit() {
    this.doctor=[
    // eslint-disable-next-line max-len
    {name:'Debasish Dash',phone:'9556328062',designation:'V.B.O',image:'/assets/image/image4.jpg',cases:[{name:'AI'},{name:'delivery'},{name:'Injury'}]},
    {name:'Sangram Paikaray',phone:'9556328062',designation:'L.I',image:'/assets/image/image2.jpg',cases:[{name:'AI'},{name:'delivery'},{name:'Injury'}]},
    {name:'Bisambar',phone:'9556328062',designation:'L.I',image:'/assets/image/image3.jpg',cases:[{name:'AI'},{name:'delivery'},{name:'Injury'}]},
    {name:'Samapina Mahapatra',phone:'9556328062',designation:'V.S',image:'/assets/image/image5.jpg',cases:[{name:'AI'},{name:'delivery'},{name:'Injury'}]},
  ];
}

}
