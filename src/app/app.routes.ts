import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ Home Page
  { path: 'register-user', component: RegisterUserComponent }, // ✅ Register User Page
  { path: 'get-all-users', component: GetAllUsersComponent }, // ✅ Get All Users Page
  { path: '**', redirectTo: '', pathMatch: 'full' } // ✅ Redirect unknown URLs to Home
];
