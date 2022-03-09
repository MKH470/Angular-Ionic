/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HomeModalPage } from '../modals/home-modal/home-modal.page';
//import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];
  m = 0;
  ckeditorContent: any = 'Hallo i am muhanad and i am web developer';
  // editorForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // this.editorForm = new FormGroup({
    //   'editor': new FormControl(null),
    // });
  }
  // onSubmit() {
  //   console.log(this.editorForm.get('editor').value);
  // }

  alertButton() {
    alert('Hi I Am Here');
  }
  clear() {
    const newm = this.m++;
    console.log(newm);
  }
  async showHomeModal() {
    const homeModel = await this.modalCtrl.create({
      component: HomeModalPage,
      componentProps: {
        text: 'I am a modal for home page',
      },
    });
    await homeModel.present();
    const res = await homeModel.onDidDismiss();
    // setTimeout(() => {
    //   this.modalCtrl.dismiss();
    // }, 3000);
    console.log(res);
  }
}
