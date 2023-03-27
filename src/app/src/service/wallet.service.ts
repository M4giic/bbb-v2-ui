import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject, catchError, of } from 'rxjs';
import { Wallet } from '../models/wallet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService implements OnInit {

  private userWalletsSource = new ReplaySubject<Wallet>();
  userWallet$ = this.userWalletsSource.asObservable();
  baseUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.http.get<Wallet[]>(this.baseUrl+"api/wallet/owner")
   .pipe(catchError((error: HttpErrorResponse): Observable<any> =>{
    console.log(error);
    return(of(null));

  }),).subscribe(resp =>{
    this.userWalletsSource.next(resp);
  })
  }

}
