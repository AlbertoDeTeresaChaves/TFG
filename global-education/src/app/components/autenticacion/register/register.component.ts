import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterPopupComponent } from '../../../pop-ups/register-popup/register-popup.component';
import { ApiService } from '../../../services/api/api.service';
import { EmailExistPopupComponent } from '../../../pop-ups/email-exist-popup/email-exist-popup.component';
import { RegisterErrorPopupComponent } from '../../../pop-ups/register-error-popup/register-error-popup.component';

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
export class RegisterComponent implements OnInit {

  datos2: any[] = [];

  constructor(private dialog: MatDialog, private apiService: ApiService) {

  }


  ngOnInit(): void {
    let datos: any[] = [];
    this.apiService.getDatos().forEach(data => {
      datos = data
    })

  }


  registerFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });

  matcher = new MyErrorStateMatcher();

  public validUser!: boolean;

  openDialog(status: number) {
    if (status == 201) {
      this.dialog.open(RegisterPopupComponent)
    }
    if (status == 200) {
      this.dialog.open(EmailExistPopupComponent)
    }
    if (status == 500) {
      this.dialog.open(RegisterErrorPopupComponent)
    }
  }

  onSubmit() {
    //
    const userData = this.registerFormGroup.value
    this.apiService.getPruebaMail(userData).subscribe(data => {
      this.openDialog(data.status)

    })

  }
}
