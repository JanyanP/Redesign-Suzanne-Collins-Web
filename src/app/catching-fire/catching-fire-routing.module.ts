import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatchingFirePage } from './catching-fire.page';

const routes: Routes = [
  {
    path: '',
    component: CatchingFirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatchingFirePageRoutingModule {}
