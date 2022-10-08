import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ai-modal',
  templateUrl: './ai-modal.component.html',
  styleUrls: ['./ai-modal.component.scss'],
})
export class AiModalComponent implements OnInit {
  selectedAI: any;

  constructor(public modalController: ModalController,public dataService: DataService) { }

  ngOnInit() {
    this.selectedAI=this.dataService.getAI();
  }

}
