import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    console.log("HGola")
  }
}
