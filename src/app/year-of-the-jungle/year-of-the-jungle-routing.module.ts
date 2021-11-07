import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearOfTheJunglePage } from './year-of-the-jungle.page';

const routes: Routes = [
  {
    path: '',
    component: YearOfTheJunglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearOfTheJunglePageRoutingModule {}
