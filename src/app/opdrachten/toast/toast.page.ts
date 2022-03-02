import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}
  async showMyToast() {
    const toast = await this.toastCtrl.create({
      header: 'Welcome!',
      message: 'Hello! Muhabnad this is toast',
      position: 'top',
      color: 'danger',
      buttons: [
        {
          icon: 'person',
          handler: () => {
            console.log('Show my profile');
          },
        },
        {
          icon: 'close-circle',
          role: 'cancle',
        },
      ],
      cssClass: 'icnrs',
    });
    await toast.present();
    setTimeout(() => {
      console.log('toast is klaaaaaaar');
      toast.dismiss();
    }, 5000);
  }
}
