import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiPageRoutingModule } from './ai-routing.module';

import { AiPage } from './ai.page';
import { AiModalComponent } from './components/ai-modal/ai-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiPageRoutingModule
  ],
  declarations: [AiPage,AiModalComponent]
})
export class AiPageModule {}
