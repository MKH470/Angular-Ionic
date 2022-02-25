import { Component, OnInit } from '@angular/core';
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
  public users: User[] = [];
  constructor(private usersService: UsersService) {}

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
    this.display = !this.display;
    return this.users;
  }
}
