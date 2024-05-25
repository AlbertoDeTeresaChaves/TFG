import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { LoginErrorPopupComponent } from '../../../pop-ups/login-error-popup/login-error-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../../../services/home/home.service';

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

  constructor(private apiService : ApiService, private homeService : HomeService , private dialog : MatDialog, private route : Router){}
    loginFormGroup = new FormGroup({
      email : new FormControl('',[Validators.email, Validators.required]),
      password : new FormControl('',Validators.required)
    })
    
    matcher = new MyErrorStateMatcher();

    openDialog(status: number) {

      if (status == 200) {
        this.route.navigate(['/GlobalEducation/home']);
      }
      if (status == 500) {
        this.dialog.open(LoginErrorPopupComponent)
      }
    }
  onSubmit(){
    const userData = this.loginFormGroup.value;
    this.apiService.isUserLoginValid(userData).subscribe(data =>{
      this.homeService.setUser(data)
      this.openDialog(data.status)
      console.log(data)
    },
    error =>{
      this.openDialog(error.status)
    }  
  );

  }
}
