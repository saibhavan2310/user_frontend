import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  standalone: true, // ✅ This ensures the component works without NgModule
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  userForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  constructor(private userService: UserService) {}

  registerUser() {
    if (this.userForm.invalid) {
      alert("Please enter a valid Name and Email.");
      return;
    }
  
    const userData = {
      name: this.userForm.value.name ?? '', // ✅ Ensure it's always a string
      email: this.userForm.value.email ?? '' // ✅ Ensure it's always a string
    };
  
    this.userService.addUser(userData).subscribe(() => {
      alert(`User Registered Successfully!`);
      this.userForm.reset();
    });
  }
  
}
