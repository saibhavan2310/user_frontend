import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent {
  users: any[] = [];

  constructor(private userService: UserService) {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
