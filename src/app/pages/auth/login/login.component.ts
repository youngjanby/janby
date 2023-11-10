import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { fetchErrorModal } from '../dialogError/dialog-error';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true

  formLogin: FormGroup = new FormGroup({
    userName: new FormControl('',
    [Validators.required,
    Validators.minLength(4),
    Validators.pattern(/^[a-zA-Z0-9]+$/)]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor(private authService: AuthService, public dialog: MatDialog) {}

  errorSignIn() {
    this.dialog.open(fetchErrorModal)
  }


  signIn() {
    let userName = this.formLogin.controls['userName'].value
    let password = this.formLogin.controls['password'].value
    
    this.authService.signIn(userName, password).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 400) {
          this.errorSignIn()
        }
        throw ''
      })
    ).subscribe(({accessToken, refreshToken, id}) => {
      this.authService.saveTokensOnLocalStorage(
        accessToken,
        refreshToken,
        id
      );
    })
  }
}
