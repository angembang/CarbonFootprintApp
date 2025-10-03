import { Injectable } from '@angular/core';
import { User } from '../models/userModel'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []; // List of registrated users
  private currentUser: User | null = null; // the current connected user

  constructor() {
     // Charge the users and current user on the start
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }

    const savedCurrentUser = localStorage.getItem('currentUser');
    if (savedCurrentUser) {
      this.currentUser = JSON.parse(savedCurrentUser);
    }

  }

  // Save users to the localstore
  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // Save the current user to the localstore
  private saveCurrentUser() {
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  // create an user
  register(username: string, password: string): User {
    if (username.length < 3) {
      throw new Error('Le pseudo doit contenir au moins 3 caractères');
    }
    if (password.length < 8) {
      throw new Error('Le mot de passe doit contenir au moins 8 caractères');
    }

    // Retrieve users from localStorage
    const savedUsers = localStorage.getItem('users');
    this.users = savedUsers ? JSON.parse(savedUsers) : [];

    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) {
      throw new Error("L'utilisateur avec ce pseudo existe déjà");
    }

    const newUser: User = {
      id: Date.now(),
      username,
      password
    };

    this.users.push(newUser);
    this.currentUser = newUser;

    this.saveUsers();
    this.saveCurrentUser();

    return newUser;
  }


  // Login method
  login(username: string, password: string): User {
    // Retriever users from localStorage
    const savedUsers = localStorage.getItem('users');
    this.users = savedUsers ? JSON.parse(savedUsers) : [];

    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      throw new Error('Identifiants incorrects');
    }

    this.currentUser = user;
    this.saveCurrentUser();

    return user;
  }


  // Logout method
  logout() {
    this.currentUser = null;
    this.saveCurrentUser();
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
