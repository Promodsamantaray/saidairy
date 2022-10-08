import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticePageRoutingModule } from './practice-routing.module';

import { PracticePage } from './practice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PracticePage],
  providers: [
    DatePipe
  ],
})
export class PracticePageModule {}
