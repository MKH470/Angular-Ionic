import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {
  @Input() username: string;
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}
  itmeControll(data) {
    this.popoverCtrl.dismiss(data);
  }
}
