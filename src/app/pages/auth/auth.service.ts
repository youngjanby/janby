import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuth } from 'src/app/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient;

  constructor(private readonly router: Router, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  signUp(name: string, password: string): Observable<UserAuth> {
    return this.http.post<UserAuth>('http://localhost:3000/auth/signup', {username: name, password: password})
  }

  signIn(name: string, password: string): Observable<UserAuth> {
    return this.http.post<UserAuth>('http://localhost:3000/auth/signin', {username: name, password: password})
  }

  saveTokensOnLocalStorage(accessToken: string, refreshToken: string, id: string) {
    localStorage.setItem('accessToken', JSON.stringify(accessToken))
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
    localStorage.setItem('id', JSON.stringify(id))
    this.router.navigate(['/products'])
  }

  refreshToken(): Observable<UserAuth> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem('refreshToken') || '')}`)
    return this.http.get<UserAuth>('http://localhost:3000/auth/refresh', {headers: headers})
  }
}
