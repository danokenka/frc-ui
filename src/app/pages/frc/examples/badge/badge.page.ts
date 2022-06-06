import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {


  constructor() { }

  ngOnInit() {
  }


   toggleColor() {
     let   badge = document.querySelector('#toggleColor');
    let prev = badge.getAttribute('color');
    badge.setAttribute('color', prev === 'secondary' ? 'primary' : 'secondary');
    badge.innerHTML = prev === 'secondary' ? 'primary' : 'secondary';
  }

}
