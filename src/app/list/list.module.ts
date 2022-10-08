import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListCardComponent } from './components/list-card/list-card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage,ListItemsComponent,ListCardComponent]
})
export class ListPageModule {}
