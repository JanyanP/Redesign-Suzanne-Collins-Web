import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GregorProphecyBanePageRoutingModule } from './gregor-prophecy-bane-routing.module';

import { GregorProphecyBanePage } from './gregor-prophecy-bane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GregorProphecyBanePageRoutingModule
  ],
  declarations: [GregorProphecyBanePage]
})
export class GregorProphecyBanePageModule {}
