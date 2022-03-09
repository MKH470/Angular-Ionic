import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-opdrachten',
  templateUrl: './opdrachten.page.html',
  styleUrls: ['./opdrachten.page.scss'],
})
export class OpdrachtenPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    await modal.present();
  }
}
