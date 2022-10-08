import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-insemination-modal',
  templateUrl: './insemination-modal.component.html',
  styleUrls: ['./insemination-modal.component.scss'],
})
export class InseminationModalComponent implements OnInit {
  selectedSI: any;

  constructor(public modalController: ModalController,public popupService: PopupService) { }

  ngOnInit() {
    this.selectedSI = {...this.popupService.getSI()};
    this.selectedSI.more=true;
  }

}
