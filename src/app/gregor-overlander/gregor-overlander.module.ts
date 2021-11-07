import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GregorOverlanderPageRoutingModule } from './gregor-overlander-routing.module';

import { GregorOverlanderPage } from './gregor-overlander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GregorOverlanderPageRoutingModule
  ],
  declarations: [GregorOverlanderPage]
})
export class GregorOverlanderPageModule {}
