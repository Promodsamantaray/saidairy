import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListpapuPageRoutingModule } from './listpapu-routing.module';

import { ListpapuPage } from './listpapu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListpapuPageRoutingModule
  ],
  declarations: [ListpapuPage]
})
export class ListpapuPageModule {}
