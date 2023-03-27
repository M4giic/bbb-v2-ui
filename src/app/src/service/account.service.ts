import { Injectable, Output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSource = new ReplaySubject<User | undefined>(1);
  currentUser$ = this.currentUserSource.asObservable();

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login(model: any, rememberMe: boolean) : Observable<Object>{
    console.log("Sending login request " + model + "remember me" + rememberMe);
    console.log(this.baseUrl+"login?rememberMe="+rememberMe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.baseUrl+"login?rememberMe="+rememberMe, JSON.stringify(model), {headers: headers});
  }

  public setUser(user: User){
    console.log("settings user as " + user);
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  public logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
  }
}
