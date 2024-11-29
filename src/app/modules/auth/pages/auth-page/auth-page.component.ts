import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    const body = this.formLogin.value;
    console.log(body);
  }
}
