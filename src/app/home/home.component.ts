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
    this.userService.login('Ange Mbang'); // login with Ange
    this.router.navigate(['/summary']);
  }

}
