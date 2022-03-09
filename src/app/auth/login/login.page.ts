import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loadingData = false;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  login() {
    console.log('login...');
    this.loadingData = true;

    setTimeout(() => {
      console.log('Verification and login completed successfully');
      this.loadingData = false;
      this.navCtrl.navigateBack('/home');
    }, 3000);
  }
}
