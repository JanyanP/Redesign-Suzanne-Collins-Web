import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GregorCodeClawPage } from './gregor-code-claw.page';

const routes: Routes = [
  {
    path: '',
    component: GregorCodeClawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GregorCodeClawPageRoutingModule {}
