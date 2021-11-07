import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FansAskedPageRoutingModule } from './fans-asked-routing.module';

import { FansAskedPage } from './fans-asked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FansAskedPageRoutingModule
  ],
  declarations: [FansAskedPage]
})
export class FansAskedPageModule {}
