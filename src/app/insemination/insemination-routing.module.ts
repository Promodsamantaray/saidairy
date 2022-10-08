import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InseminationPage } from './insemination.page';

const routes: Routes = [
  {
    path: '',
    component: InseminationPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class InseminationPageRoutingModule {}
