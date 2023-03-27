import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../service/account.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private accountService: AccountService) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user: User | undefined) =>{
        if(user) {
            return true;
          }

        return false;
      })
    );
  }

}
