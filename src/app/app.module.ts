import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './src/login-screen/login-screen.component';
import { NavBarComponent } from './src/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './src/home/home.component';
import { NotFoundComponent } from './src/errors/not-found/not-found.component';
import { RegisterComponent } from './src/register/register.component';
import { LoginPageComponent } from './src/login-page/login-page.component';
import { WalletsListComponent } from './src/wallets-list/wallets-list.component';
import { PaymentsListComponent } from './src/payments-list/payments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginPageComponent,
    WalletsListComponent,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
