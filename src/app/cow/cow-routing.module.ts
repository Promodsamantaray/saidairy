import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CowPage } from './cow.page';

const routes: Routes = [
  {
    path: '',
    component: CowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CowPageRoutingModule {}
