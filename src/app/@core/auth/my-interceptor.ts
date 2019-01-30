import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor() { }

  currentUser = {
    user: 'UserName',
    email: 'test@test.com',
  };

  // this would come from the backend
  fakeJWTToken:string = 'fake-jwt-token';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {


    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.fakeJWTToken}`
        }
      });
    }

    return next.handle(request);
  }
}
