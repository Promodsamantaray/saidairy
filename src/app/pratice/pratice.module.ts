import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraticePageRoutingModule } from './pratice-routing.module';

import { PraticePage } from './pratice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticePageRoutingModule
  ],
  declarations: [PraticePage]
})
export class PraticePageModule {}
