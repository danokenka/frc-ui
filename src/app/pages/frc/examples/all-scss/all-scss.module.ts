import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllScssPageRoutingModule } from './all-scss-routing.module';

import { AllScssPage } from './all-scss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllScssPageRoutingModule
  ],
  declarations: [AllScssPage]
})
export class AllScssPageModule {}
