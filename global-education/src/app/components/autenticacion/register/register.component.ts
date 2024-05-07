import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule, MatFormField } from '@angular/material/input';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  nameFormControl = new FormControl('',Validators.required);
  emailFormControl = new FormControl('',[Validators.email, Validators.required]);
  passwordFormControl = new FormControl('',Validators.required);

  matcher = new MyErrorStateMatcher();

onSubmit(){
  console.log("Hola")
}
}
