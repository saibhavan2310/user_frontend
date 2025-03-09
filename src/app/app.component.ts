import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HomeComponent, RegisterUserComponent, GetAllUsersComponent],
})
export class AppComponent {
  title = 'User Management System';
}