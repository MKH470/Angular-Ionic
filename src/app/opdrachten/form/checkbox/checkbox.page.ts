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
    console.log(isCheckedBeforeSave);
  }
  checkValueAfterSave() {
    console.log('result after save: ', this.isChecked);
  }
}
