import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userId;
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    const resulte = this.http.get<any>(this.url);
    return resulte;
  }
  setUserById(userSetId: any) {
    this.userId = userSetId;
  }
  getUserById() {
    return this.userId;
  }
}
