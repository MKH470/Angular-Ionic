import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  selectSegment = 'chasts';
  constructor() {}
  ngOnInit() {}
  selecteYourSegment($ev) {
    this.selectSegment = $ev.target.value;
    console.log(this.selectSegment);
  }
}
