import { Injectable } from '@angular/core';
import { User } from '../models/userModel';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {
    const savedCurrentUser = localStorage.getItem('currentUser');
    if (savedCurrentUser) {
      this.currentUser = JSON.parse(savedCurrentUser);
    }
  }

  // create an user
  register(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, { username, password })
  }


  // Login method
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(user => {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }


  // Logout method
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }


  // Method to check if the user is connected
  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  // Method to retrieve the connected user name
  getUsername(): string {
    return this.currentUser ? this.currentUser.username : '';
  }

}
