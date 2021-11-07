import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MockingjayPageRoutingModule } from './mockingjay-routing.module';

import { MockingjayPage } from './mockingjay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MockingjayPageRoutingModule
  ],
  declarations: [MockingjayPage]
})
export class MockingjayPageModule {}
