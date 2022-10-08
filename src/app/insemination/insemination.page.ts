import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InseminationModalComponent } from './component/insemination-modal/insemination-modal.component';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'app-insemination',
  templateUrl: './insemination.page.html',
  styleUrls: ['./insemination.page.scss'],
})
export class InseminationPage implements OnInit {
  public insemination = [];
  more: boolean;

  constructor(public popupService: PopupService,public modalController: ModalController) { }

  ngOnInit() {
    this.insemination=[
     {name:'Twinkle',date:'',ai:'',state:'',image:'/assets/image/insemination-1.jpg'},
     {name:'Glossy',date:'',ai:'',state:'',image:'/assets/image/insemination-1.jpg'},
     {name:'Picku',date:'',ai:'',state:'',image:'/assets/image/insemination-1.jpg'},
     {name:'Little',date:'',ai:'',state:'',image:'/assets/image/insemination-1.jpg'},
    ];
  }
 details(member){
  //member.more = !member.more;
  this.popupService.setSI(member);
  this.presentModal();
 }
 async presentModal() {
  const modal = await this.modalController.create({
    component: InseminationModalComponent,
  });
  return await modal.present();
}
}
