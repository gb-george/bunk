import { Injectable, NgModule } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { environment } from 'src/app/environment/environment';

@Injectable()
export class UrlPrefixInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const url = `${environment.API_URL}${request.url}`;

    const modifiedRequest = request.clone({
      url: url,
    });

    return next.handle(modifiedRequest);
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlPrefixInterceptor,
      multi: true,
    },
  ],
})
export class UrlPrefixConfigModule {}
