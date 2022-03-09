import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-profiel',
  templateUrl: './user-profiel.page.html',
  styleUrls: ['./user-profiel.page.scss'],
})
export class UserProfielPage implements OnInit {
  userById;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.userById = this.route.snapshot.paramMap.get('userId');
    this.getUser();
  }
  getUser() {
    this.userById = this.usersService.getUserById();
  }
}
