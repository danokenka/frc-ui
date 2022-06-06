import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {
  selectedIndex = 0;
  customPickerOptions: any;
  constructor(private pickerController: PickerController) {    
    
  
 
}

  ngOnInit() {
  }

  async pickerOpt() {
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Save',
          role: 'save',
          handler: () => console.log('Clicked Save!'),
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Clicked Cancel!'),
        }]
    }
  }

async presentPicker(customClass) {
 

  const options = [
    {
      text: '1',
      value: '01',
    },
    {
      text: '2',
      value: '02',
    },
    {
      text: '3',
      value: '03',
    },
    {
      text: '4',
      value: '04',
    },
    {
      text: '5',
      value: '05',
    },
    {
      text: '6',
      value: '06',
    },
    {
      text: '7',
      value: '07',
    },
    {
      text: '8',
      value: '08',
    },
    {
      text: '9',
      value: '09',
    },
    {
      text: '10',
      value: '10',
    },
    {
      text: '11',
      value: '11',
    },
    {
      text: '12',
      value: '12',
    },
  ];

       const pickerElement = await this.pickerController.create({
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => console.log('Clicked Cancel!'),
          },
          {
            text: 'Save',
            cssClass: 'save-btn',
            handler: (ev) => {
              const v = ev.hours.value;
              this.selectedIndex = options.findIndex((opt) => opt.value === v);
            },
          },
          {
            text: 'Log',
            handler: (val) => {
              return false;
            },
          },
        ],
        columns: [
          {
            name: 'hours',
            selectedIndex: this.selectedIndex,
            prefix: 'total',
            suffix: 'hours',
            options: [...options],
          },
        ],
        htmlAttributes: {
          'data-testid': 'basic-picker',
        },
        cssClass: customClass,
      });

      await pickerElement.present();
    
  }
  






  
}
