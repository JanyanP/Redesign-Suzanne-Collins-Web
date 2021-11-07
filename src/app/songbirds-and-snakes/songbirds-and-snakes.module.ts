import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongbirdsAndSnakesPageRoutingModule } from './songbirds-and-snakes-routing.module';

import { SongbirdsAndSnakesPage } from './songbirds-and-snakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongbirdsAndSnakesPageRoutingModule
  ],
  declarations: [SongbirdsAndSnakesPage]
})
export class SongbirdsAndSnakesPageModule {}
