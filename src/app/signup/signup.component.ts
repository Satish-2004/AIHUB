import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userForm!: FormGroup;

  user = {
    name: '',
    email: '',
    password: ''
  };


  constructor(private authService: AuthService, private fb: FormBuilder, private route: Router) { 
    this.userForm = this.fb.group({
      name: new FormControl('',  [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('',  [Validators.required, Validators.minLength(6)])
    })

    
  }

  


  signup() {
    console.log(this.userForm.value);
    if(this.userForm.valid){
      this.route.navigate(['/login'])
      console.log(this.userForm.value);
      this.authService.signup(this.userForm.value).subscribe({
        next:(resp)=>{
            console.log(resp)
        },
        error:(err)=>{
          
        }
      })
    }
    else{
      this.userForm.markAllAsTouched();
    }
    
  }

}
