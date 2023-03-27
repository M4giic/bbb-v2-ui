import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AccountService } from '../service/account.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from '../models/loginRequest';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnChanges, OnInit{

  rememberMeButton: boolean = false;
  accountService: AccountService;
  public disableLogin = true;
  user = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[
      Validators.required]),

      // ,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
        //Minimum eight characters, at least one letter, one number and one special character:
        // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
  });

  constructor(accountService: AccountService,
      private router: Router){


    this.accountService = accountService;
  }
  ngOnInit(): void {

  }

  get email(){
    return this.user.get('email')
    }


  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges");
    //todo validation can be added here
    //   this.disableLogin = false;
    // console.log(this.model);
    // if(this.user.email != "" && this.model.password != ""){
    // }
    // else{
    //   this.disableLogin = true;
    // }
  }

  login()
  {
    this.accountService.login({
      password: this.user.value.password,
      email: this.user.value.email
      }, this.rememberMeButton).pipe(
      catchError((error: HttpErrorResponse): Observable<any> =>{
        console.log(error);
        this.router.navigateByUrl('/loginPage');
        return(of(null));

      }),).subscribe((response: User) => {
      console.log(response);
      this.accountService.setUser(response);
    });
  }

  register(){
    this.router.navigateByUrl('/register');
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }

}
