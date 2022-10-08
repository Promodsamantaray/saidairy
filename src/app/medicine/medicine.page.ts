import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {
  public medicine = [];
  constructor() {}

  ngOnInit() {
    this.medicine = [
      // eslint-disable-next-line max-len
      {
        name: 'Doloban-plus',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2024',
        piece:23,
        alertPiece:'20'

      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2026',
        piece:15,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2025',
        piece:52,
        alertPiece:'20'
      },
      {
        name: 'Doloban-plus',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2024',
        piece:40,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2026',
        piece:53,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2025',
        piece:5,
        alertPiece:'20'
      },
      {
        name: 'Doloban-plus',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2024',
        piece:20,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2026',
        piece:10,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2025',
        piece:6,
        alertPiece:'20'
      },
      {
        name: 'Doloban-plus',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2024',
        piece:8,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2026',
        piece:12,
        alertPiece:'20'
      },
      {
        name: 'mineral-mixture',
        image: '/assets/image/totavit strong.jpg',
        desc: 'its a good composition',
        expiry:'20-9-2025',
        piece:23,
        alertPiece:'20'
      },
    ];
   const list= this.alertList(this.medicine);
   console.log(list);
  }
  alertList(medicine: any[]) {
   return medicine.filter(item=>item.piece<=item.alertPiece);
  }
}
