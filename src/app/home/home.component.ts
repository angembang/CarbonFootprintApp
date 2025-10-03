import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginAndGoToSummary() {
     const route = this.userService.isLoggedIn() ? '/summary' : '/login';
     this.router.navigate([route])

  }

}
