import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatchingFirePageRoutingModule } from './catching-fire-routing.module';

import { CatchingFirePage } from './catching-fire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatchingFirePageRoutingModule
  ],
  declarations: [CatchingFirePage]
})
export class CatchingFirePageModule {}
