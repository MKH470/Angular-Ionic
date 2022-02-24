import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opdrachten',
  templateUrl: './opdrachten.page.html',
  styleUrls: ['./opdrachten.page.scss'],
})
export class OpdrachtenPage implements OnInit {
  m = 0;
  constructor() {}

  ngOnInit() {}

  alertButton() {
    alert('Hi I Am Here');
  }
  clear() {
    const newm = this.m++;
    console.log(newm);
  }
  fapClick() {
    console.log('FAP is clicked');
  }
  share(n: string) {
    console.log('Supscriped on ' + n);
  }
}
