import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraticePage } from './pratice.page';

const routes: Routes = [
  {
    path: '',
    component: PraticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraticePageRoutingModule {}
