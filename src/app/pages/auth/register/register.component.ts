import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './ValidatorConfirmPass';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
hide: boolean = true;

formRegister: FormGroup = new FormGroup({
  userName: new FormControl('',
  [Validators.required,
  Validators.minLength(4),
  Validators.pattern(/^[a-zA-Z0-9]+$/)]
  ),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]),
  confirmPassword: new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ])
}, {validators: passwordMatchValidator})

constructor(private authService: AuthService) {}

signUp() {
  let userName = this.formRegister.controls['userName'].value
  let password = this.formRegister.controls['password'].value

  this.authService.signUp(userName, password).subscribe(({accessToken, refreshToken, id}) => {
    this.authService.saveTokensOnLocalStorage(
      accessToken,
      refreshToken,
      id
    );
  })
}
}
