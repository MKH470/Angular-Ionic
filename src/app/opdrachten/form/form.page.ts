import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  name: string;
  email: string;
  error: string;
  constructor() {}

  ngOnInit() {}
  saveData() {
    if (
      this.email &&
      this.email.length > 0 &&
      this.name &&
      this.name.length > 0
    ) {
      console.log('The name is: ', this.name);
      console.log('The email is: ', this.email);
    } else {
      this.error =
        'There was an error filling in the fields, please return the required fields';
    }
  }
}
