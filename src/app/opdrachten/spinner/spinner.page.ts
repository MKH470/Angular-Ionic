import { Component, OnInit } from '@angular/core';
import { Artists } from 'src/app/artists';
//import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage implements OnInit {
  loading: boolean;
  display = true;
  public items: Artists[] = [
    { grade: 1, name: 'Davido', country: 'Nigeria' },
    { grade: 2, name: 'Burna Boy', country: 'Nigeria' },
    { grade: 3, name: 'Diamondz Platinum', country: 'Tanzania' },
    { grade: 4, name: 'Sarkodie', country: 'Ghana' },
    { grade: 5, name: 'Mr. Eazi', country: 'Nigeria' },
  ];
  constructor() {}

  ngOnInit(): void {}

  getDataAfterSpinner() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    this.display = false;
    return this.items;
  }
}
