import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GregorMarksSecretPageRoutingModule } from './gregor-marks-secret-routing.module';

import { GregorMarksSecretPage } from './gregor-marks-secret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GregorMarksSecretPageRoutingModule
  ],
  declarations: [GregorMarksSecretPage]
})
export class GregorMarksSecretPageModule {}
