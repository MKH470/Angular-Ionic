import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  loading: boolean;
  usresAfterRefreshing: any[];
  users: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  doRevreshing($ev) {
    setTimeout(() => {
      this.usresAfterRefreshing = this.users;
      $ev.target.complete();
    }, 2000);
  }
}
