import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InseminationPageRoutingModule } from './insemination-routing.module';
import { InseminationPage } from './insemination.page';
import { InseminationModalComponent } from './component/insemination-modal/insemination-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InseminationPageRoutingModule
  ],
  declarations: [InseminationPage,InseminationModalComponent]
})
export class InseminationPageModule {}
