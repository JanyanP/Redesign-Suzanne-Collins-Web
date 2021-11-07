import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharlieMcButtonPage } from './charlie-mc-button.page';

const routes: Routes = [
  {
    path: '',
    component: CharlieMcButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharlieMcButtonPageRoutingModule {}
