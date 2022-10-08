import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { pairs } from 'rxjs';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public contactList = [
    {
      name: 'papu',
      image:
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      contact: '977548742',
      email: 'utv@gmail.com',
      address: { at: 'pairs', pin: 458230, ps: 'kjh' },
    },
    {
      name: 'utsha',
      image:
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      contact: '62584815',
      email: 'utv@gmail.com',
      address: { at: 'pairs', pin: 458230, ps: 'kjh' },
    },
    {
      name: 'alok',
      image:
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      contact: '52588845',
      email: 'utv@gmail.com',
      address: { at: 'pairs', pin: 458230, ps: 'kjh' },
    },
    {
      name: 'karuna',
      image:
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      contact: '098866',
      email: 'utv@gmail.com',
      address: { at: 'pairs', pin: 458230, ps: 'kjh' },
    },
  ];
  constructor(public modalController: ModalController) {}

  ngOnInit() {}
  detail(info) {
    this.presentModal(info);
  }
  async presentModal(info) {
    const modal = await this.modalController.create({
      component: ContactDetailComponent,
      componentProps: { info },
    });
    return await modal.present();
  }
}
