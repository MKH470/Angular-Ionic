import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  gender;
  constructor() {}

  ngOnInit() {}
  saveGender() {
    console.log(this.gender);
  }
  saveGederUsingEvent(ev) {
    const genderFromEvent = ev.detail.value;
    console.log(genderFromEvent);
  }
}
