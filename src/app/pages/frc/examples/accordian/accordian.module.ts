import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccordianPageRoutingModule } from './accordian-routing.module';

import { AccordianPage } from './accordian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordianPageRoutingModule
  ],
  declarations: [AccordianPage]
})
export class AccordianPageModule {}
