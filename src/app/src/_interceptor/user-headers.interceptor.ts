import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../service/account.service';
import { User } from '../models/user';

@Injectable()
export class UserHeadersInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let currentUser : User | undefined;

    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);
    if(currentUser)
    {
      request = request.clone({
        headers: request.headers.set( `Authorization`, `Bearer ${currentUser.token}`)
                                .set('Content-Type', 'application/json')
                                .append(`x-user-id`, `${currentUser.id}`),

      })
    }
    return next.handle(request);
  }
}
