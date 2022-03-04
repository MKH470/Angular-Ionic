import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  isChecked: boolean;
  constructor() {}

  ngOnInit() {}
  checkValueBeforeSave(ev) {
    console.log(ev.target.color);
    const isCheckedBeforeSave = ev.detail.checked;
    const valueOfChecked = ev.detail.value;
    console.log(isCheckedBeforeSave);
    console.log(valueOfChecked);
  }
  checkValueAfterSave() {
    console.log('result after save: ', this.isChecked);
  }
}
