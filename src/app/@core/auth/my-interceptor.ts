import { Inject, Injectable, Injector } from "@angular/core";
import { tap, switchMap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { NbDummyAuthStrategyOptions, NbAuthStrategyOptions, NbDummyAuthStrategy, NbAuthJWTToken, NbAuthJWTInterceptor, NbAuthService, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbAuthToken } from "@nebular/auth";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private injector: Injector,
    @Inject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER) protected filter) {
}
  //function which will be called for all http calls

  currentUser = {
    user: "UserName",
    email: "test@test.com"
  };


  
 // fakeJWTToken:NbAuthJWTToken = "fake-jwt-token"; //normally this would come from the backend 

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //logging the updated Parameters to browser's console
    return this.authService.getToken().pipe(
      switchMap((token: NbAuthToken) => {
        const JWT = `Bearer ${token.getValue()}`;
        request = request.clone({
          setHeaders: {
            Authorization: JWT,
          },
        });
        console.log(request);
        return next.handle(request);
      }),
    )

  //   localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   if (currentUser) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${this.token.getValue()}`
  //       }
  //     });
  //   }

  //   console.log(request);


  //   return next.handle(request);
   }
   protected get authService(): NbAuthService {
    return this.injector.get(NbAuthService);
  }
  
}
