import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  iconName: string;
  users: User[];
  testButton = 'Edit Order ';
  isDisabled = true;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  doReorder($ev) {
    console.log($ev.detail);
    // als gebruik ionic -------- maar nu gebruek wij CSS
    // if ($ev.detail.from > $ev.detail.to) {
    //   this.iconName = 'arrow-up';
    // } else {
    //   this.iconName = 'arrow-down';
    // }
    this.users = $ev.detail.complete(this.users);
  }
  editListOrder() {
    this.isDisabled = !this.isDisabled;
  }
}
