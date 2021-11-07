import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockingjayPage } from './mockingjay.page';

const routes: Routes = [
  {
    path: '',
    component: MockingjayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MockingjayPageRoutingModule {}
