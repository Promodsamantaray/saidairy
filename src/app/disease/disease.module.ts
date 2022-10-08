import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseasePageRoutingModule } from './disease-routing.module';

import { DiseasePage } from './disease.page';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseasePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DiseasePage,DetailsComponent]
})
export class DiseasePageModule {}
