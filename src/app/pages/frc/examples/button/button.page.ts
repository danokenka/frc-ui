import { Component, OnInit } from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  isDanger: boolean = true;
  isSecondary: boolean = false;
  isRound: boolean = true;
  isOutline: boolean = false;
  isClear: boolean = true;
  myColor: string = 'secondary';
  myColor2: string = 'dark';

  logEvent(event) {
    console.log(event)
  }

}



// function routes(routes: any, arg1: { preloadingStrategy: typeof PreloadAllModules; }) {
//   throw new Error('Function not implemented.');
// }
