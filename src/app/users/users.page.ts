import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Options } from 'selenium-webdriver';
import { OptionPage } from '../opdrachten/option/option.page';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  loading: boolean;
  display: boolean;
  scroll: boolean;
  public users: User[] = [];
  constructor(
    private usersService: UsersService,
    private navCtrl: NavController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }
  getAllUsers() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.display = true;
    return this.users;
  }
  goToProfile(id) {
    this.usersService.setUserById(id);
    const r = this.usersService.getUserById();
    console.log('id=', r);
    this.navCtrl.navigateForward('/users/user-profiel');
  }
  async showOPtions(ev, username) {
    const options = await this.popoverCtrl.create({
      component: OptionPage,
      event: ev,
      componentProps: {
        username,
      },
    });
    await options.present();
    const res = await options.onDidDismiss();
    console.log(res);
  }
}
