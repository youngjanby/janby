import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const group = control as FormGroup;
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
  
    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }
    return null;
  };