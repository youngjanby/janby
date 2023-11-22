import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable, catchError } from 'rxjs';
import { AuthService } from '../pages/auth/auth.service';

  
  type Request = Record<string, string | boolean | number>
  
  @Injectable()
  export class MyInterceptor implements HttpInterceptor {
    public constructor(private requestService: AuthService, private router: Router) {}
    intercept(
      request: HttpRequest<Request>,
      next: HttpHandler
    ): Observable<HttpEvent<Request>> {
      const authToken = localStorage.getItem('accessToken');
  
      if (request.url.includes('auth/refresh')) {
        return next.handle(request);
      }
  
      if (authToken) {
        const modifiedRequest = request.clone({
          headers: request.headers.set(
            'Authorization',
            `Bearer ${JSON.parse(authToken)}`
          ),
        });
        return next.handle(modifiedRequest)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if(error.status === 401) {
             this.requestService.refreshToken().pipe(
              catchError((error: HttpErrorResponse) => {
                if(error.status === 403) this.router.navigate(['/login'])
                throw ''
              })).subscribe((res) => {
              this.requestService.saveTokensOnLocalStorage(res.accessToken, res.refreshToken, res.id)
             })
            }
            throw ''
          })
        )
      }
      return next.handle(request);
    }
  }
  