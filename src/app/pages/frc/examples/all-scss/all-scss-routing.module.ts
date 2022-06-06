import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllScssPage } from './all-scss.page';

const routes: Routes = [
  {
    path: '',
    component: AllScssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllScssPageRoutingModule {}
