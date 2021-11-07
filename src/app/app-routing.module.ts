import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'works',
    loadChildren: () => import('./works/works.module').then( m => m.WorksPageModule)
  },
  {
    path: 'interview',
    loadChildren: () => import('./interview/interview.module').then( m => m.InterviewPageModule)
  },
  {
    path: 'biography',
    loadChildren: () => import('./biography/biography.module').then( m => m.BiographyPageModule)
  },
  {
    path: 'fans-asked',
    loadChildren: () => import('./fans-asked/fans-asked.module').then( m => m.FansAskedPageModule)
  },
  {
    path: 'sign-in-up',
    loadChildren: () => import('./sign-in-up/sign-in-up.module').then( m => m.SignInUpPageModule)
  },
  {
    path: 'hunger-games',
    loadChildren: () => import('./hunger-games/hunger-games.module').then( m => m.HungerGamesPageModule)
  },
  {
    path: 'catching-fire',
    loadChildren: () => import('./catching-fire/catching-fire.module').then( m => m.CatchingFirePageModule)
  },
  {
    path: 'mockingjay',
    loadChildren: () => import('./mockingjay/mockingjay.module').then( m => m.MockingjayPageModule)
  },
  {
    path: 'songbirds-and-snakes',
    loadChildren: () => import('./songbirds-and-snakes/songbirds-and-snakes.module').then( m => m.SongbirdsAndSnakesPageModule)
  },
  {
    path: 'gregor-overlander',
    loadChildren: () => import('./gregor-overlander/gregor-overlander.module').then( m => m.GregorOverlanderPageModule)
  },
  {
    path: 'gregor-prophecy-bane',
    loadChildren: () => import('./gregor-prophecy-bane/gregor-prophecy-bane.module').then( m => m.GregorProphecyBanePageModule)
  },
  {
    path: 'gregor-curse-warmbloods',
    loadChildren: () => import('./gregor-curse-warmbloods/gregor-curse-warmbloods.module').then( m => m.GregorCurseWarmbloodsPageModule)
  },
  {
    path: 'gregor-marks-secret',
    loadChildren: () => import('./gregor-marks-secret/gregor-marks-secret.module').then( m => m.GregorMarksSecretPageModule)
  },
  {
    path: 'gregor-code-claw',
    loadChildren: () => import('./gregor-code-claw/gregor-code-claw.module').then( m => m.GregorCodeClawPageModule)
  },
  {
    path: 'charlie-mc-button',
    loadChildren: () => import('./charlie-mc-button/charlie-mc-button.module').then( m => m.CharlieMcButtonPageModule)
  },
  {
    path: 'year-of-the-jungle',
    loadChildren: () => import('./year-of-the-jungle/year-of-the-jungle.module').then( m => m.YearOfTheJunglePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
