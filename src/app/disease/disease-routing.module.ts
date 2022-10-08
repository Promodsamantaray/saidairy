import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseasePage } from './disease.page';

const routes: Routes = [
  {
    path: '',
    component: DiseasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseasePageRoutingModule {}
