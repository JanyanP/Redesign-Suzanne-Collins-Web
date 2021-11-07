import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearOfTheJunglePageRoutingModule } from './year-of-the-jungle-routing.module';

import { YearOfTheJunglePage } from './year-of-the-jungle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearOfTheJunglePageRoutingModule
  ],
  declarations: [YearOfTheJunglePage]
})
export class YearOfTheJunglePageModule {}
