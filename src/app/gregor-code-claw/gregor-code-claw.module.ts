import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GregorCodeClawPageRoutingModule } from './gregor-code-claw-routing.module';

import { GregorCodeClawPage } from './gregor-code-claw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GregorCodeClawPageRoutingModule
  ],
  declarations: [GregorCodeClawPage]
})
export class GregorCodeClawPageModule {}
