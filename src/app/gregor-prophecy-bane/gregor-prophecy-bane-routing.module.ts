import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GregorProphecyBanePage } from './gregor-prophecy-bane.page';

const routes: Routes = [
  {
    path: '',
    component: GregorProphecyBanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GregorProphecyBanePageRoutingModule {}
