import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // if the user is loggged in, redirect to the carbo footprint page
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/summary']);
    }
  }
  // Login method
  login() {
    this.errorMessage = '';

    if (this.username.length < 3) {
      this.errorMessage = "Le pseudo doit contenir au moins 3 caractères";
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = "Le mot de passe doit contenir au moins 8 caractères.";
      return;
    }

    try {
      this.userService.login(this.username, this.password);
      this.router.navigate(['/summary']);
    } catch (err: any) {
      this.errorMessage = err.message;
    }
  }

}
