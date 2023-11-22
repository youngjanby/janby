import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router) {}

  canActivate(): boolean {
  let id = localStorage.getItem('id')
    let isLoggined = id ? true : false

    if(!isLoggined) {
      this.router.navigate(['/login'])
    }

    return isLoggined
  }
}
