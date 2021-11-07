import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GregorCurseWarmbloodsPage } from './gregor-curse-warmbloods.page';

const routes: Routes = [
  {
    path: '',
    component: GregorCurseWarmbloodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GregorCurseWarmbloodsPageRoutingModule {}
