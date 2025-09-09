import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }
  userForm!: FormGroup;
  submitted: Boolean = false;
  users: any

  user = {
    email: '',
    password: ''
  };

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    if (this.userForm.valid) {
    const user = this.userForm.value;

    this.authService.login(user).subscribe({
      next: (response) => {
        console.log('User logged in successfully:', response);
        localStorage.setItem('token', JSON.stringify(response.jwtToken));
        localStorage.setItem('userid', JSON.stringify(response.userId));
        this.user.email = '';
        this.user.password = '';
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.user.email = '';
        this.user.password = '';
        // console.log('Login failed:', err);
        alert('Login failed. Please check your credentials and try again.')
      }
    });
  } else {
    this.userForm.markAllAsTouched();
  }

}}
