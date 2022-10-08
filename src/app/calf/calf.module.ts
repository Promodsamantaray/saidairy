import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalfPageRoutingModule } from './calf-routing.module';

import { CalfPage } from './calf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalfPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CalfPage],
  providers: [
    DatePipe
  ],
})
export class CalfPageModule {}
