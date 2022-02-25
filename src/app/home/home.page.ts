import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];
  m = 0;
  constructor() {}
  alertButton() {
    alert('Hi I Am Here');
  }
  clear() {
    const newm = this.m++;
    console.log(newm);
  }
}
