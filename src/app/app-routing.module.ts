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
  {
    path: 'badge',
    loadChildren: () => import('./pages/frc/examples/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/frc/examples/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'picker',
    loadChildren: () => import('./pages/frc/examples/picker/picker.module').then( m => m.PickerPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/frc/examples/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'all-scss',
    loadChildren: () => import('./pages/frc/examples/all-scss/all-scss.module').then( m => m.AllScssPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/frc/examples/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/frc/examples/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/frc/examples/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/frc/examples/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/frc/examples/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/frc/examples/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
