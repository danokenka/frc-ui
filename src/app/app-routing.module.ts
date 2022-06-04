import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/frc/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/frc/final/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/frc/dev/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'accordian',
    loadChildren: () => import('./pages/frc/examples/accordian/accordian.module').then( m => m.AccordianPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/frc/examples/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/frc/examples/alert/alert.module').then( m => m.AlertPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
