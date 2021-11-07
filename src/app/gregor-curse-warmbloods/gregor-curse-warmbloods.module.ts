import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GregorCurseWarmbloodsPageRoutingModule } from './gregor-curse-warmbloods-routing.module';

import { GregorCurseWarmbloodsPage } from './gregor-curse-warmbloods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GregorCurseWarmbloodsPageRoutingModule
  ],
  declarations: [GregorCurseWarmbloodsPage]
})
export class GregorCurseWarmbloodsPageModule {}
