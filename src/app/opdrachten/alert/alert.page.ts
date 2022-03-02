import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      mode: 'ios',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          //icon: 'trash-outline',
          text: 'Delete',
          handler: () => {
            console.log('delete');
          },
        },
        {
          // icon: 'close-outline',
          text: 'cancel',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
  async showInputAlert() {
    const inputAlert = await this.alertCtrl.create({
      header: 'Supscribtion!!!',
      message: 'please enter your info',
      mode: 'ios',
      inputs: [
        {
          type: 'text',
          placeholder: 'enter your name',
          name: 'name',
        },
        {
          type: 'email',
          placeholder: 'enter your email',
          name: 'email',
        },
      ],
      buttons: [
        {
          text: 'cancle',
          role: 'cancel',
        },
        {
          text: 'save',
          handler: (data) => {
            console.log('user data is: ', data);
          },
        },
      ],
    });
    await inputAlert.present();
  }
  async showChekboxAlert() {
    const checkbox = await this.alertCtrl.create({
      header: 'What is your language?',
      message: 'Chose your language',
      mode: 'ios',
      inputs: [
        {
          type: 'checkbox',
          label: 'English',
          value: 'english',
        },
        {
          type: 'checkbox',
          label: 'Arabic',
          value: 'arabic',
        },
        {
          type: 'checkbox',
          label: 'Netherlands',
          value: 'netherlands',
        },
      ],
      buttons: [
        {
          text: 'cancle',
          role: 'cancel',
        },
        {
          text: 'chose',
          handler: (data) => {
            console.log(data);
          },
        },
      ],
    });
    await checkbox.present();
  }
  async showRadioAlert() {
    const radio = await this.alertCtrl.create({
      header: 'What is your age',
      message: 'Please select your age',
      mode: 'ios',
      inputs: [
        {
          type: 'radio',
          label: '18-25',
          value: '18-25',
        },
        {
          type: 'radio',
          label: '26-35',
          value: '26-35',
        },
        {
          type: 'radio',
          label: '36-45',
          value: '36-45',
        },
        {
          type: 'radio',
          label: 'more than 45',
          value: 'more-than-45',
        },
      ],
      buttons: [
        {
          text: 'cancle',
          role: 'cancel',
        },
        {
          text: 'select',
          handler: (data) => {
            console.log(data);
          },
        },
      ],
    });
    await radio.present();
  }
}
