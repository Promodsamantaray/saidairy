import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalfPage } from './calf.page';

const routes: Routes = [
  {
    path: '',
    component: CalfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalfPageRoutingModule {}
