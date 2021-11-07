import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GregorOverlanderPage } from './gregor-overlander.page';

const routes: Routes = [
  {
    path: '',
    component: GregorOverlanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GregorOverlanderPageRoutingModule {}
