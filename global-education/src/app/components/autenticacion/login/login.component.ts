import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(){}

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('',Validators.required) 

  }) 

  onSubmit(){
    console.log("Hola")
  }
}
