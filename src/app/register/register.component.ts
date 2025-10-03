import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // On unit, check if the user is logged in
  // If yes, redirect to the carbon footprint page
  ngOnInit() {
    if(this.userService.isLoggedIn()) {
      this.router.navigate(['/summary']);
    }

  }

  // Create an user
  register() {
    this.errorMessage = '';

    try {
      this.userService.register(this.username, this.password);
      this.router.navigate(['/login']);
    } catch (err: any) {
      this.errorMessage = err.message;
    }
  }


}
