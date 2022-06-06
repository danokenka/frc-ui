import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }


   toggleBoolean(id, prop) {
       document.querySelector('ion-input').addEventListener('ionBlur', (ev) => {
    console.log(ev);
  });
    var el = document.getElementById(id);

    var isTrue = el[prop] ? false : true;
    el[prop] = isTrue;
    console.log('in toggleBoolean, setting', prop, 'to', isTrue);
  }
}






// var numberInput = checkInput('input1');
// updateResult(numberInput, 'numberInputResult');
// var textInput = checkInput('input2');
// updateResult(textInput, 'textInputResult');
// var defaultInput = checkInput('input3');
// updateResult(defaultInput, 'defaultInputResult');
// var noLabelInput = checkInput('input4');
// updateResult(noLabelInput, 'noLabelInputResult');
// // Update results of input
// function updateResult(result, resultId) {
// var resultEl = document.getElementById(resultId);
// resultEl.innerHTML = result ? 'passed' : 'FAILED';
// var itemEl = resultEl.closest('ion-item');
// itemEl.color = result ? 'secondary' : 'danger';
// }
// function checkInput(id) {
// var el = document.getElementById(id);
// var inputEl = el.querySelector('input');
// if (id === 'input1') {
// return testAttributes(el, inputEl, {
// id: 'input1',
// type: 'number',
// placeholder: 'Placeholder',
// name: 'holaa',
// min: '0',
// max: '10000',
// step: '2',
// autocomplete: 'on',
// autocorrect: 'on',
// autocapitalize: 'on',
// spellcheck: 'true',
// maxLength: '4',
// 'aria-labelledby': 'lbl-0',
// readonly: true,
// disabled: true,
// });
// } else if (id === 'input2') {
// return testAttributes(el, inputEl, {
// id: 'input2',
// type: 'text',
// placeholder: 'my placeholder',
// value: 'test',
// readonly: undefined,
// disabled: undefined,
// });
// } else if (id === 'input3') {
// return testAttributes(el, inputEl, {
// id: 'input3',
// type: undefined,
// value: 'inputs',
// readonly: undefined,
// disabled: undefined,
// });
// } else if (id === 'input4') {
// return testAttributes(el, inputEl, {
// id: 'input4',
// type: undefined,
// readonly: undefined,
// disabled: undefined,
// 'aria-label': 'input4',
// });
// }
// return false;
// }
// function testAttributes(el, inputEl, attributes) {
// for (let attr in attributes) {
// const expected = attributes[attr];
// const value = el[attr];
// if (expected === null) {
// if (el.hasAttribute(attr) || value !== '') {
// console.error(`Element should NOT have "${attr}"`);
// return false;
// }
// } else {
// if (expected !== value && expected !== el.getAttribute(attr)) {
// console.error(`Value "${attr}" does not match: ${expected} != ${value}`);
// return false;
// }
// }
// }
// return true;
// }
