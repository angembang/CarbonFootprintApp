import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private username: string = '';

  login(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username || '';
  }

  isLoggedIn(): boolean {
    return this.username !== '';
  }
}
