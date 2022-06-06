import { Component, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.page.html',
  styleUrls: ['./accordian.page.scss'],
})
export class AccordianPage {

  // constructor() { }

  // ngOnInit() {
  // }
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;
  constructor() {}
  
  logAccordionValue() {
    console.log(this.accordionGroup.value);
  }
  
  closeAccordion() {
    this.accordionGroup.value = undefined;
  }  
}

