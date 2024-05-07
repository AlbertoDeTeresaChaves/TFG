import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { RouterOutlet,RouterLink } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink,MatInputModule,MatFormField],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(){}

    emailFormControl = new FormControl('',[Validators.email, Validators.required]);
    passwordFormControl = new FormControl('',Validators.required);

    matcher = new MyErrorStateMatcher();

  onSubmit(){
    console.log("Hola")
  }
}
