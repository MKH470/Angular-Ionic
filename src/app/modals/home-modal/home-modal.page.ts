import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.page.html',
  styleUrls: ['./home-modal.page.scss'],
})
export class HomeModalPage implements OnInit {
  @Input() text: string;
  textModal: string;
  foonModal: number;
  loading = false;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  closeHomeModal() {
    this.loading = true;
    setTimeout(() => {
      this.modalCtrl.dismiss([this.textModal, this.foonModal]);
      this.loading = false;
    }, 3000);
    // this.modalCtrl.dismiss(this.textModal);
  }
}
