import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {
  @ViewChild(IonList, { static: false }) list: IonList;
  constructor() {}

  ngOnInit() {}
  call(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.list.closeSlidingItems();
    console.log('calling with: ' + id);
  }
}
