import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}
  async presentAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Chose Source',
      mode: 'ios',
      buttons: [
        {
          icon: 'camera-outline',
          text: 'Open Camera',
          handler: () => {
            console.log('open camera');
          },
        },
        {
          icon: 'images-outline',
          text: 'Open Gallary',
          handler: () => {
            console.log('open gallary');
          },
        },
        {
          icon: 'close-circle',
          text: 'cancle',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
