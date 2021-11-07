import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FansAskedPage } from './fans-asked.page';

const routes: Routes = [
  {
    path: '',
    component: FansAskedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FansAskedPageRoutingModule {}
