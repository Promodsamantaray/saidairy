/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AiModalComponent } from './components/ai-modal/ai-modal.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.page.html',
  styleUrls: ['./ai.page.scss'],
})
export class AiPage implements OnInit {
  public ai = [];
  more: boolean;
  papu: boolean;
  constructor(public dataService: DataService,public modalController: ModalController) { }

  ngOnInit() {
   this.ai= [
    {semen:'bgxgddx',storage:'khgkvmjv',vendor:'kjnlk',image:'/assets/image/semen-1.jpg',location:'kjv',specification:'mnb ',brand:'mnlkj',review:'kljb'},
    {semen:'bgxgddx',storage:'khgkvmjv',vendor:'kjnlk',image:'/assets/image/semen-2.jpg',location:'kjv',specification:'mnb',brand:'mnlkj',review:'kljb'},
    {semen:'bgxgddx',storage:'khgkvmjv',vendor:'kjnlk',image:'/assets/image/semen-3.jpg',location:'kjv',specification:'mnb ',brand:'mnlkj',review:'kljb'},
    {semen:'bgxgddx',storage:'khgkvmjv',vendor:'kjnlk',image:'/assets/image/semen-5.jpg',location:'kjv',specification:'mnb ',brand:'mnlkj',review:'kljb'}
  ];
}

details(member){
  member.more = !member.more;
  this.dataService.setAI(member);
  this.presentModal();
}
async presentModal() {
  const modal = await this.modalController.create({
    component: AiModalComponent,
  });
  return await modal.present();
}
}

