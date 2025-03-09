import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private userService: UserService) {}

  registerUser() {
    if (this.userForm.invalid) {
      alert("Please enter a valid Name and Email.");
      return;
    }
  
    // ✅ Ensure values are always string (no null or undefined)
    const userData = {
      name: this.userForm.value.name ?? '', // If null, default to empty string
      email: this.userForm.value.email ?? '' // If null, default to empty string
    };
  
    this.userService.addUser(userData).subscribe(() => {
      alert(`User Registered Successfully!`);
      this.userForm.reset();
    });
  }
  
}
