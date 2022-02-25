import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data: any = [
    { grade: 1, name: 'Davido', country: 'Nigeria' },
    { grade: 2, name: 'Burna Boy', country: 'Nigeria' },
    { grade: 3, name: 'Diamondz Platinum', country: 'Tanzania' },
    { grade: 4, name: 'Sarkodie', country: 'Ghana' },
    { grade: 5, name: 'Mr. Eazi', country: 'Nigeria' },
  ];
  constructor() {}
  getDataFromService() {
    return this.data;
  }
}
