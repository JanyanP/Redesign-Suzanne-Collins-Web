import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharlieMcButtonPageRoutingModule } from './charlie-mc-button-routing.module';

import { CharlieMcButtonPage } from './charlie-mc-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharlieMcButtonPageRoutingModule
  ],
  declarations: [CharlieMcButtonPage]
})
export class CharlieMcButtonPageModule {}
