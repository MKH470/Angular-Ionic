/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];
  m = 0;
  ckeditorContent: any = 'Hallo i am muhanad and i am web developers';
  // editorForm: FormGroup;
  constructor() {}

  ngOnInit() {
    // this.editorForm = new FormGroup({
    //   'editor': new FormControl(null),
    // });
  }
  // onSubmit() {
  //   console.log(this.editorForm.get('editor').value);
  // }

  alertButton() {
    alert('Hi I Am Here');
  }
  clear() {
    const newm = this.m++;
    console.log(newm);
  }
}
