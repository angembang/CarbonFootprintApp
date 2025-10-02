import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.getUsername();
  }

}
