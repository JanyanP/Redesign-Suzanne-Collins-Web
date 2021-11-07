import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongbirdsAndSnakesPage } from './songbirds-and-snakes.page';

const routes: Routes = [
  {
    path: '',
    component: SongbirdsAndSnakesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongbirdsAndSnakesPageRoutingModule {}
