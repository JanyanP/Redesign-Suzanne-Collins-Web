import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GregorMarksSecretPage } from './gregor-marks-secret.page';

const routes: Routes = [
  {
    path: '',
    component: GregorMarksSecretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GregorMarksSecretPageRoutingModule {}
