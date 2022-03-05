import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  constructor() {}

  ngOnInit() {}
  getDateTime($ev) {
    console.log($ev.target.value);
    const date = new Date($ev.target.value);
    const month = date.getMonth();
    const day = date.getDay();
    console.log(month);
    console.log(day);
  }
}
