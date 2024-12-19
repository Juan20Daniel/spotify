import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  formLogin: FormGroup = new FormGroup({});
  constructor(private authService:AuthService, private router:Router) {}
  ngOnInit():void {
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }
  login():void {
    if(this.formLogin.invalid) return;
    const {email, password} = this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(res => {
      if(res.access) this.router.navigate(['/', 'tracks']);
    })
  }
}
