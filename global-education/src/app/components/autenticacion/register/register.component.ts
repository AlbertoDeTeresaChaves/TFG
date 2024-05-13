import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterPopupComponent } from '../../../pop-ups/register-popup/register-popup.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class DialogContentExampleDialog { }


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private dialog: MatDialog) { 
  }

  registerFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  matcher = new MyErrorStateMatcher();

  public validUser!: boolean;

  openDialog() {
    this.dialog.open(RegisterPopupComponent)
  }

  onSubmit() {
    this.openDialog()
  }
}
